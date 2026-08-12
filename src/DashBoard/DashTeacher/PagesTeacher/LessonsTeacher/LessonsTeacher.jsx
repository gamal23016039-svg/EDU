import lessonStyle from "./LessonsTeacher.module.css";

function LessonsTeacher() {
  const lessons = [
    {
      title: "HTML Structure",
      status: "Published",
      date: "Aug 10, 2026",
    },
    {
      title: "State Management",
      status: "Draft",
      date: "Aug 12, 2026",
    },
    {
      title: "Assignment Review",
      status: "Needs Feedback",
      date: "Aug 15, 2026",
    },
  ];

  return (
    <section className={lessonStyle.lessonsPage}>
      <h1 className={lessonStyle.title}>Lessons</h1>

      <div className={lessonStyle.lessonGrid}>
        {lessons.map((lesson, index) => (
          <article className={lessonStyle.lessonCard} key={index}>
            <h3>{lesson.title}</h3>
            <p>{lesson.date}</p>
            <span className={lessonStyle.status}>{lesson.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LessonsTeacher;
