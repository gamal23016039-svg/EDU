import LandingPage from "./LandingPage/LandingPage";
import Login from "./LoginRegisterPage/Login";
import Register from "./LoginRegisterPage/Register";
import { Routes, Route } from "react-router-dom";
import DashAdmin from "./DashBoard/DashAdmin/DashAdmin";
import DashStudent from "./DashBoard/DashStudent/DashStudent";
import DashTeacher from "./DashBoard/DashTeacher/DashTeacher";
import DashStudentLayout from "./DashBoard/DashStudent/PagesStudent/DashStudentLayout/DashStudentLayout";
import LessonsStudent from "./DashBoard/DashStudent/PagesStudent/LessonsStudent/LessonsStudent";
import DashTeacherLayout from "./DashBoard/DashTeacher/PagesTeacher/DashTeacherLayout/DashTeacherLayout";
import CoursesTeacher from "./DashBoard/DashTeacher/PagesTeacher/CoursesTeacher/CoursesTeacher";
import StudentsTeacher from "./DashBoard/DashTeacher/PagesTeacher/StudentsTeacher/StudentsTeacher";
import LessonsTeacher from "./DashBoard/DashTeacher/PagesTeacher/LessonsTeacher/LessonsTeacher";
import Eror from "./404 Eror/Eror";
import ProtectedRoutes from "./Guerds/ProtectDash";
import RoleProtected from "./Guerds/ProtectTeacaherAdmin";
import Users from "./DashBoard/DashAdmin/PagesAdmin/Users/Users";
import Courses from "./DashBoard/DashAdmin/PagesAdmin/Courses/CoursesDash";
import LessonsDash from "./DashBoard/DashAdmin/PagesAdmin/Lessons/LessonsDash";
import ForgetPassword from "./LoginRegisterPage/ForgetPassword/ForgetPass";
import Verify from "./LoginRegisterPage/ForgetPassword/VerifyOTP/Verify";
import DashLayout from "./DashBoard/DashAdmin/PagesAdmin/DashLayout/DashLayout";
import CoursePage from "./CoursesPage/CoursesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/courses/:id" element={<CoursePage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboardadmin" element={<DashAdmin />}>
          <Route index element={<DashLayout />} />
          <Route path="users" element={<Users />} />
          <Route path="courses" element={<Courses />} />
          <Route path="lessons" element={<LessonsDash />} />
        </Route>

        <Route path="/dashboardstudent" element={<DashStudent />}>
          <Route index element={<DashStudentLayout />} />
          <Route path="lessons" element={<LessonsStudent />} />
          <Route path="courses" element={<LessonsStudent />} />
          <Route path="profile" element={<DashStudentLayout />} />
          <Route path="settings" element={<DashStudentLayout />} />
        </Route>

        <Route path="/dashboardteacher" element={<DashTeacher />}>
          <Route index element={<DashTeacherLayout />} />
          <Route path="courses" element={<CoursesTeacher />} />
          <Route path="students" element={<StudentsTeacher />} />
          <Route path="lessons" element={<LessonsTeacher />} />
          <Route path="profile" element={<DashTeacherLayout />} />
        </Route>
      </Route>

      <Route element={<RoleProtected allowedRoles={["Student"]} />}>
        <Route path="/dashboardstudent" element={<DashStudent />} />
      </Route>

      <Route element={<RoleProtected allowedRoles={["Teacher"]} />}>
        <Route path="/dashboardteacher" element={<DashTeacher />} />
      </Route>

      <Route element={<RoleProtected allowedRoles={["Admin"]} />}>
        <Route path="/dashboardadmin" element={<DashAdmin />} />
      </Route>

      <Route path="*" element={<Eror />} />
    </Routes>
  );
}

export default App;
