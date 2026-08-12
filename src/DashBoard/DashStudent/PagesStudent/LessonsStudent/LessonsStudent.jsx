import lessonStyle from "./LessonsStudent.module.css";

function LessonsStudent() {
  const lessons = [
    {
      title: "React Components",
      description: "Understand props, state, and reusable UI building blocks.",
      progress: "82%"
    },
    {
      title: "JavaScript Fundamentals",
      description: "Practice functions, arrays, conditionals, and ES6 syntax.",
      progress: "61%"
    },
    {
      title: "CSS Layout",
      description: "Build responsive layouts with flexbox and grid.",
      progress: "75%"
    }
  ];

  return (
    <section className={lessonStyle.lessonsPage}>
      <h1 className={lessonStyle.title}>My Lessons</h1>

      <div className={lessonStyle.lessonGrid}>
        {lessons.map((lesson, index) => (
          <article className={lessonStyle.lessonCard} key={index}>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
            <div className={lessonStyle.lessonMeta}>
              <span className={lessonStyle.progress}>{lesson.progress} complete</span>
              <button className={lessonStyle.openButton}>Open</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default LessonsStudent;
