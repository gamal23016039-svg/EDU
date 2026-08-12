import headerStyle from "./HeaderStudent.module.css";

function HeaderStudent() {
  return (
    <header className={headerStyle.header}>
      <div>
        <span className={headerStyle.welcomeText}>Student Dashboard</span>
        <h1 className={headerStyle.title}>Welcome back, Learner</h1>
      </div>

      <div className={headerStyle.actions}>
        <button className={headerStyle.iconButton}>🔔</button>
        <button className={headerStyle.profileButton}>Student</button>
      </div>
    </header>
  );
}

export default HeaderStudent;
