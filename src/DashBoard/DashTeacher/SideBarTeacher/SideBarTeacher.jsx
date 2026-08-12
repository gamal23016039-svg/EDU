import sidebarStyle from "./SideBarTeacher.module.css";
import { NavLink } from "react-router-dom";

function SideBarTeacher() {
  return (
    <aside className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.logoBox}>
        <span className={sidebarStyle.logo}>QS</span>
        <span className={sidebarStyle.title}>Quick Share</span>
      </div>

      <nav className={sidebarStyle.navMenu}>
        <NavLink
          to="/dashboardteacher"
          end
          className={({ isActive }) =>
            isActive ? sidebarStyle.linkActive : sidebarStyle.link
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboardteacher/courses"
          className={({ isActive }) =>
            isActive ? sidebarStyle.linkActive : sidebarStyle.link
          }
        >
          My Courses
        </NavLink>
        <NavLink
          to="/dashboardteacher/students"
          className={({ isActive }) =>
            isActive ? sidebarStyle.linkActive : sidebarStyle.link
          }
        >
          Students
        </NavLink>
        <NavLink
          to="/dashboardteacher/lessons"
          className={({ isActive }) =>
            isActive ? sidebarStyle.linkActive : sidebarStyle.link
          }
        >
          Lessons
        </NavLink>
      </nav>

      <button className={sidebarStyle.logout}>Logout</button>
    </aside>
  );
}

export default SideBarTeacher;
