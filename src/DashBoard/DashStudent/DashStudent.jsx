import SideBarStudent from "./SideBarStudent/SideBarStudent";
import HeaderStudent from "./HeaderStudent/HeaderStudent";
import { Outlet } from "react-router-dom";
import dashStudent from "./DashStudent.module.css";

function DashStudent() {
  return (
    <div className={dashStudent.dashboard}>
      <SideBarStudent />

      <div className={dashStudent.content}>
        <HeaderStudent />
        <main className={dashStudent.pageContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashStudent;
