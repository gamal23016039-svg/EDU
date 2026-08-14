import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

function RoleProtected({ allowedRoles }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  const normalized = String(user.role || "").toLowerCase();
  const allowed = allowedRoles.map((role) => String(role).toLowerCase());

  if (!allowed.includes(normalized)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default RoleProtected;
