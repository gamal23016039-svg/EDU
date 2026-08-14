import { useState } from "react";
import courseStyle from "./CoursesTeacher.module.css";
import CreateCourseModal from "./CreateCourseModal";

function CoursesTeacher() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    {
      title: "Frontend Essentials",
      students: 34,
      lessons: 12,
      status: "Published",
    },
    {
      title: "Modern JavaScript",
      students: 46,
      lessons: 9,
      status: "Draft",
    },
    {
      title: "CSS Architecture",
      students: 28,
      lessons: 8,
      status: "Published",
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={courseStyle.coursePage}>
      <div className={courseStyle.pageHeader}>
        <h1 className={courseStyle.title}>My Courses</h1>
        <button
          className={courseStyle.createCourseBtn}
          onClick={handleOpenModal}
        >
          + Create Course
        </button>
      </div>

      <div className={courseStyle.courseGrid}>
        {courses.map((course, index) => (
          <article className={courseStyle.courseCard} key={index}>
            <h3>{course.title}</h3>
            <p>{course.students} students</p>
            <p>{course.lessons} lessons</p>
            <span className={courseStyle.status}>{course.status}</span>
          </article>
        ))}
      </div>

      {/* Create Course Modal */}
      <CreateCourseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}

export default CoursesTeacher;
