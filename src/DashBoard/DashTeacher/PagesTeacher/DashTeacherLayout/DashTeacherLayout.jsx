import layoutStyle from "./DashTeacherLayout.module.css";

function DashTeacherLayout() {
  return (
    <section className={layoutStyle.dashTeacherLayout}>
      <div className={layoutStyle.welcome}>
        <div>
          <h1>Teacher Overview</h1>
          <p>Monitor your classes, lessons, and learners.</p>
        </div>
        <button className={layoutStyle.statusButton}>Active</button>
      </div>

      <div className={layoutStyle.summaryGrid}>
        <article className={layoutStyle.summaryCard}>
          <h3>Courses</h3>
          <strong>03</strong>
          <span>Published courses</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Students</h3>
          <strong>126</strong>
          <span>Enrolled learners</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Lessons</h3>
          <strong>14</strong>
          <span>Learning units</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Assignments</h3>
          <strong>08</strong>
          <span>Pending reviews</span>
        </article>
      </div>

      <section className={layoutStyle.upcomingPanel}>
        <h2>Today’s Teaching Tasks</h2>
        <ul>
          <li>Review React assignment submissions</li>
          <li>Prepare the next JavaScript lesson</li>
          <li>Schedule a live Q&A session</li>
        </ul>
      </section>
    </section>
  );
}

export default DashTeacherLayout;
