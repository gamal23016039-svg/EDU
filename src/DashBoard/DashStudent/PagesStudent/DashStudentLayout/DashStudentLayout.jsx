import layoutStyle from "./DashStudentLayout.module.css";

function DashStudentLayout() {
  return (
    <section className={layoutStyle.dashStudentLayout}>
      <div className={layoutStyle.welcome}>
        <div>
          <h1>Student Overview</h1>
          <p>Here is your learning progress for this week.</p>
        </div>
        <button className={layoutStyle.statusButton}>Enrolled</button>
      </div>

      <div className={layoutStyle.summaryGrid}>
        <article className={layoutStyle.summaryCard}>
          <h3>Courses</h3>
          <strong>04</strong>
          <span>Active enrollments</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Lessons</h3>
          <strong>18</strong>
          <span>Available lessons</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Progress</h3>
          <strong>76%</strong>
          <span>Overall completion</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Certificates</h3>
          <strong>02</strong>
          <span>Achievements unlocked</span>
        </article>
      </div>

      <section className={layoutStyle.upcomingPanel}>
        <h2>Upcoming Study Plan</h2>
        <ul>
          <li>Complete React Basics lesson</li>
          <li>Join JavaScript assignment review call</li>
          <li>Finish UI Design project exercise</li>
        </ul>
      </section>
    </section>
  );
}

export default DashStudentLayout;
