import { useEffect, useState } from "react";
import { GetDashBoardTeacher } from "../../../../Api/DashBoard";
import layoutStyle from "./DashTeacherLayout.module.css";

function DashTeacherLayout() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function loadStats() {
      try {
        const dashboard = await GetDashBoardTeacher();
        setStats(dashboard || {});
      } catch (error) {
        console.error(
          error.message || "Could not load teacher dashboard stats",
        );
      }
    }

    loadStats();
  }, []);

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
          <strong>{stats.coursescount ?? 0}</strong>
          <span>Your courses</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Students</h3>
          <strong>{stats.studentscount ?? 0}</strong>
          <span>Enrolled learners</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Lessons</h3>
          <strong>{stats.lessonscount ?? 0}</strong>
          <span>Learning units</span>
        </article>

        <article className={layoutStyle.summaryCard}>
          <h3>Assignments</h3>
          <strong>{stats.assignmentscount ?? 0}</strong>
          <span>Tracked assignments</span>
        </article>
      </div>

      <section className={layoutStyle.upcomingPanel}>
        <h2>Today’s Teaching Tasks</h2>
        <ul>
          <li>Review class submissions</li>
          <li>Prepare the next lesson plan</li>
          <li>Monitor learner progress</li>
        </ul>
      </section>
    </section>
  );
}

export default DashTeacherLayout;
