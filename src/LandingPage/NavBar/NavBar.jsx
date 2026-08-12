import styles from "./Nav.module.css";
import Logo from "../../assets/The-Logo.svg";
import ButtonLoginRegster from "./ButtonOfLoginRegister";
import { AuthContext } from "../../Contexts/AuthContext";
import { useContext } from "react";

function NavBar() {
  const { user } = useContext(AuthContext);
  return (
    <nav>
      <div className={styles.container}>
        {/* the logo and the text beside it the left side on the navbar */}
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" /> <span>EDU GATE</span>
        </div>

        {/* the links that will optimize the translation between sections */}
        <ul className={styles.transfares}>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Courses">Courses</a>
          </li>
        </ul>
        {/* ****************************************************************** */}
        {user ? (
          <>
            <span>Welcome {user.name}</span>
          </>
        ) : (
          <ButtonLoginRegster />
        )}
      </div>
      {/* ****************************************************************** */}
    </nav>
  );
}

export default NavBar;
