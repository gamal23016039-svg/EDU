import side from "./SideBarAdmin.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { NavLink } from "react-router-dom";

function SideBarAdmin() {
  const { user } = useContext(AuthContext);

  return (
    <div className={side.container}>
      {/* ======================================================== */}
      {/* the greeting of the user */}
      <div className={side.greetingUser}>
        <div className={side.iconman}>
          <i className="fa-solid fa-user"></i>
        </div>
        {user ? (
          <span>
            Welcome <br /> {user.name}
          </span>
        ) : (
          "there is no user"
        )}
      </div>
      {/* the border that seprate */}
      <div className={side.borderseparate}></div>
      {/* the list of the controls */}
      <div className={side.controllist}>
        {/* the users */}
        <div className={side.theusers}>
          <div className={side.iconuser}>
            <i className="fa-solid fa-users"></i>
          </div>
          <NavLink to="/dashboardadmin/users" className={side.nav}>
            Users
          </NavLink>
        </div>
        {/* the courses */}
        <div className={side.thecourses}>
          <div className={side.iconbook}>
            <i className="fa-solid fa-book"></i>
          </div>
          <NavLink to="/dashboardadmin/courses" className={side.nav}>
            Courses
          </NavLink>
        </div>
        {/* the lessons */}
        <div className={side.thelessons}>
          <div className={side.iconlesson}>
            <i className="fa-solid fa-book"></i>
          </div>
          <NavLink to="/dashboardadmin/lessons" className={side.nav}>
            Lessons
          </NavLink>
        </div>
      </div>
      {/* ======================================================== */}
    </div>
  );
}

export default SideBarAdmin;
