import SideBarTeacher from "./SideBarTeacher/SideBarTeacher";
import HeaderTeacher from "./HeaderTeacher/HeaderTeacher";
import { Outlet } from "react-router-dom";
import dashTeacher from "./DashTeacher.module.css";

function DashTeacher() {
  return (
    <div className={dashTeacher.dashboard}>
      <SideBarTeacher />

      <div className={dashTeacher.content}>
        <HeaderTeacher />
        <main className={dashTeacher.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashTeacher;
