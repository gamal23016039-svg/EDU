import cp from "../CoursesPage.module.css";

function LessonSidebar({ lessons }) {
  return (
    <div className={cp.lessonSidebar}>
      <h2>Lessons</h2>
      <ul>
        {lessons?.map((lesson, index) => (
          <li key={index}>{lesson.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default LessonSidebar;
