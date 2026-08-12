import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function ButtonLoginRegster() {
  return (
    <div className={styles.authButtons}>
      <Link>
        <button className={styles.signup}>sign up</button>
      </Link>
      <Link to="/Login">
        <button className={styles.login}>login</button>
      </Link>
    </div>
  );
}

export default ButtonLoginRegster;
