import headerStyle from "./HeaderTeacher.module.css";

function HeaderTeacher() {
  return (
    <header className={headerStyle.header}>
      <div>
        <span className={headerStyle.welcomeText}>Teacher Dashboard</span>
        <h1 className={headerStyle.title}>Welcome back, Instructor</h1>
      </div>

      <div className={headerStyle.actions}>
        <button className={headerStyle.iconButton}>🔔</button>
        <button className={headerStyle.profileButton}>Teacher</button>
      </div>
    </header>
  );
}

export default HeaderTeacher;
