import studentStyle from "./StudentsTeacher.module.css";

function StudentsTeacher() {
  const students = [
    {
      name: "Amina Ali",
      progress: "91%",
      course: "Frontend Essentials",
    },
    {
      name: "Yousef Saleh",
      progress: "76%",
      course: "Modern JavaScript",
    },
    {
      name: "Rana Khaled",
      progress: "88%",
      course: "CSS Architecture",
    },
  ];

  return (
    <section className={studentStyle.studentsPage}>
      <h1 className={studentStyle.title}>Students</h1>

      <div className={studentStyle.studentGrid}>
        {students.map((student, index) => (
          <article className={studentStyle.studentCard} key={index}>
            <h3>{student.name}</h3>
            <p>{student.course}</p>
            <span className={studentStyle.progress}>
              {student.progress} progress
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StudentsTeacher;
