import { useEffect, useState } from "react";
import { GetDashBoardAdmin } from "../../../../Api/DashBoard";
import layout from "./DashLayout.module.css";

function DashLayout() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function loadStats() {
      try {
        const dashboard = await GetDashBoardAdmin();
        setStats(dashboard || {});
      } catch (error) {
        console.error(error.message || "Could not load admin dashboard stats");
      }
    }

    loadStats();
  }, []);

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
          <strong>{stats.userscount ?? 0}</strong>
          <span>Total accounts</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Students</h3>
          <strong>{stats.studentscount ?? 0}</strong>
          <span>Registered students</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Teachers</h3>
          <strong>{stats.teacherscount ?? 0}</strong>
          <span>Active instructors</span>
        </article>

        <article className={layout.summaryCard}>
          <h3>Courses</h3>
          <strong>{stats.coursescount ?? 0}</strong>
          <span>Published courses</span>
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
