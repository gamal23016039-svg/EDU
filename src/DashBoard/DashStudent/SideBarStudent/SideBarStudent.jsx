import sidebarStyle from "./SideBarStudent.module.css";
import { NavLink } from "react-router-dom";

function SideBarStudent() {
  return (
    <aside className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.logoBox}>
        <span className={sidebarStyle.logo}>QS</span>
        <span className={sidebarStyle.title}>Quick Share</span>
      </div>

      <nav className={sidebarStyle.navMenu}>
        <NavLink to="/dashboardstudent" end className={({ isActive }) => isActive ? sidebarStyle.linkActive : sidebarStyle.link}>
          Dashboard
        </NavLink>
        <NavLink to="/dashboardstudent/lessons" className={({ isActive }) => isActive ? sidebarStyle.linkActive : sidebarStyle.link}>
          My Lessons
        </NavLink>
        <NavLink to="/dashboardstudent/courses" className={({ isActive }) => isActive ? sidebarStyle.linkActive : sidebarStyle.link}>
          Courses
        </NavLink>
        <NavLink to="/dashboardstudent/profile" className={({ isActive }) => isActive ? sidebarStyle.linkActive : sidebarStyle.link}>
          Profile
        </NavLink>
        <NavLink to="/dashboardstudent/settings" className={({ isActive }) => isActive ? sidebarStyle.linkActive : sidebarStyle.link}>
          Settings
        </NavLink>
      </nav>

      <button className={sidebarStyle.logout}>Logout</button>
    </aside>
  );
}

export default SideBarStudent;
