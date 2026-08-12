import SideBarAdmin from "./SideBarAdmin/SideBarAdmin";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import { Outlet } from "react-router-dom";
import main from "./DashAdmin.module.css";

function DashAdmin() {
  return (
    <div className={main.dashboard}>
      <SideBarAdmin />

      <div className={main.content}>
        <HeaderAdmin />
        <main className={main.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashAdmin;
