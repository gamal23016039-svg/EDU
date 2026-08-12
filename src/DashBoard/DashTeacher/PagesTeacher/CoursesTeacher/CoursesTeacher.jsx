import courseStyle from "./CoursesTeacher.module.css";

function CoursesTeacher() {
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

  return (
    <section className={courseStyle.coursePage}>
      <h1 className={courseStyle.title}>My Courses</h1>

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
    </section>
  );
}

export default CoursesTeacher;
