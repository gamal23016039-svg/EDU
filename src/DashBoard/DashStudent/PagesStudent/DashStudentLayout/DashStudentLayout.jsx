import { useEffect, useState } from "react";
import { GetDashBoardStudent } from "../../../../Api/DashBoard";
import layoutStyle from "./DashStudentLayout.module.css";

function DashStudentLayout() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function loadStats() {
      try {
        const dashboard = await GetDashBoardStudent();
        setStats(dashboard || {});
      } catch (error) {
        console.error(
          error.message || "Could not load student dashboard stats",
        );
      }
    }

    loadStats();
  }, []);

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
          <strong>{stats.coursescount ?? 0}</strong>
          <span>Active enrollments</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Lessons</h3>
          <strong>{stats.lessonscount ?? 0}</strong>
          <span>Available lessons</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Assignments</h3>
          <strong>{stats.assignmentcount ?? 0}</strong>
          <span>Assigned tasks</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Submissions</h3>
          <strong>{stats.submissioncount ?? 0}</strong>
          <span>Completed submissions</span>
        </article>
      </div>

      <section className={layoutStyle.upcomingPanel}>
        <h2>Upcoming Study Plan</h2>
        <ul>
          <li>Complete your enrolled lessons</li>
          <li>Track pending assignments</li>
          <li>Continue learning progress</li>
        </ul>
      </section>
    </section>
  );
}

export default DashStudentLayout;
