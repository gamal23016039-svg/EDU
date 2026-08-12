import courseStyle from "./CoursesDash.module.css";

function Courses() {
  const courses = [
    {
      title: "React Development",
      students: 38,
      lessons: 11,
      status: "Active",
    },
    {
      title: "Node API Design",
      students: 25,
      lessons: 10,
      status: "Draft",
    },
    {
      title: "UI Design Systems",
      students: 42,
      lessons: 7,
      status: "Active",
    },
  ];

  return (
    <section className={courseStyle.coursesPage}>
      <h1 className={courseStyle.title}>Courses Management</h1>

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

export default Courses;
