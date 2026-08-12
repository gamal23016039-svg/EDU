import layout from "./DashLayout.module.css";

function DashLayout() {
  return (
    <section className={layout.DashLayout}>
      <div className={layout.welcome}>
        <div>
          <h1>Admin Overview</h1>
          <p>Platform management and operational summary.</p>
        </div>
        <button className={layout.statusButton}>System Online</button>
      </div>

      <div className={layout.summaryGrid}>
        <article className={layout.summaryCard}>
          <h3>Users</h3>
          <strong>324</strong>
          <span>Total accounts</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Courses</h3>
          <strong>12</strong>
          <span>Published courses</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Teachers</h3>
          <strong>08</strong>
          <span>Active instructors</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Lessons</h3>
          <strong>46</strong>
          <span>Learning resources</span>
        </article>
      </div>

      <section className={layout.upcomingPanel}>
        <h2>Administration Tasks</h2>
        <ul>
          <li>Review new course requests</li>
          <li>Manage student accounts</li>
          <li>Update platform announcements</li>
        </ul>
      </section>
    </section>
  );
}

export default DashLayout;
