import headerStyle from "./HeaderAdmin.module.css";

function HeaderAdmin() {
  return (
    <header className={headerStyle.header}>
      <div>
        <span className={headerStyle.welcomeText}>Admin Dashboard</span>
        <h1 className={headerStyle.title}>Welcome back, Admin</h1>
      </div>

      <div className={headerStyle.actions}>
        <button className={headerStyle.iconButton}>🔔</button>
        <button className={headerStyle.profileButton}>Admin</button>
      </div>
    </header>
  );
}

export default HeaderAdmin;
