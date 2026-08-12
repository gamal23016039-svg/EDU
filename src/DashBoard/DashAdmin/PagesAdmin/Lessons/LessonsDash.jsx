import lessonStyle from "./LessonsDash.module.css";

function LessonsDash() {
  const lessons = [
    {
      title: "React Components",
      course: "React Development",
      status: "Published",
    },
    {
      title: "REST APIs",
      course: "Node API Design",
      status: "Draft",
    },
    {
      title: "Grid Layout",
      course: "UI Design Systems",
      status: "Published",
    },
  ];

  return (
    <section className={lessonStyle.lessonsPage}>
      <h1 className={lessonStyle.title}>Lessons Management</h1>

      <div className={lessonStyle.lessonGrid}>
        {lessons.map((lesson, index) => (
          <article className={lessonStyle.lessonCard} key={index}>
            <h3>{lesson.title}</h3>
            <p>{lesson.course}</p>
            <span className={lessonStyle.status}>{lesson.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LessonsDash;
