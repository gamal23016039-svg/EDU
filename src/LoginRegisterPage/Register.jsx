import styles from "./LoginRegister.module.css";
import { AuthContext } from "../Contexts/AuthContext";
import { useState, useContext, useEffect, useRef } from "react";
import Logo from "../assets/The-Logo.svg";
import Gmail from "../assets/Mail.svg";
import { register } from "../Api/AuthRegister";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const nameInput = useRef(null);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function HandleRegister() {
    try {
      const data = await register({
        email,
        password,
        firstName,
        lastName,
      });
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      if (data?.role === "student") {
        navigate("/dashboard/student");
      }
      if (data?.role === "teacher") {
        navigate("/dashboard/teacher");
      }
      if (data?.role === "admin") {
        navigate("/dashboard/admin");
      }
    } catch (error) {
      console.log(error.massege || "Something went Wrong");
    }
  }

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  return (
    <div className={styles.theDad}>
      <div className={styles.loginPage}>
        {/*---------------------------------------------------------*/}
        <div className={styles.theLeftSide}>
          <img src={Gmail} className={styles.thePhoto} alt="" />
        </div>
        {/*---------------------------------------------------------*/}

        <div className={styles.theRightSide}>
          {/*---------------------------------------------------------*/}
          <div className={styles.eduGatePhoto}>
            <img src={Logo} alt="" />
          </div>
          {/*---------------------------------------------------------*/}
          <div className={styles.names}>
            <label>
              <span> First Name : </span>
              <input
                ref={nameInput}
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </label>
            <label>
              <span> Last Name : </span>
              <input
                ref={nameInput}
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </label>
          </div>
          <label>
            <span> E-mail : </span>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>
          <label className="password">
            <span> Password : </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          {/*---------------------------------------------------------*/}
          <button onClick={HandleRegister}>Register</button>
          <button>
            <i className="fa-brands fa-google"></i> {" | "} Continue with Google
          </button>
        </div>
        {/*---------------------------------------------------------*/}

        {/*---------------------------------------------------------*/}
      </div>
    </div>
  );
}

export default Register;
