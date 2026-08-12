import cp from "./CoursesPage.module.css";
import VideoPlayer from "./Components/videoPlayer";
import LessonSidebar from "./Components/LessonSidebar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCoursebyid } from "../Api/CoursesbyId";

function CoursesPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const courseData = await GetCoursebyid(id);
      setCourse(courseData);
    }

    fetchCourse();
  }, [id]);

  return (
    <div className={cp.coursesPage}>
      <h1 className={cp.coursetitle}>{course?.title}</h1>

      <VideoPlayer lesson={course?.lessons?.[0]} />

      <LessonSidebar lessons={course?.lessons} />
    </div>
  );
}
export default CoursesPage;
