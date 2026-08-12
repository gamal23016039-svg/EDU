import styles from "./LoginRegister.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Logo from "../assets/The-Logo.svg";
import Gmail from "../assets/Mail.svg";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Api/Authlogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameInput = useRef(null);
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function HnadleLogin() {
    try {
      const data = await login(email, password);
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
      console.log(error.message);

      let err = document.getElementById("error");
      err.innerHTML = "Invalid E-mail or Password";
      err.style.color = "red";
    }
  }

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  function handelName(e) {
    setEmail(e.target.value);
  }

  function handelPassword(e) {
    setPassword(e.target.value);
  }

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
          <label>
            <span> E-mail : </span>
            <input
              ref={nameInput}
              type="text"
              value={email}
              onChange={handelName}
              placeholder="Email"
              required
            />
          </label>
          <label className="password">
            <span> Password : </span>
            <input
              type="password"
              value={password}
              onChange={handelPassword}
              placeholder="Password"
              required
            />
          </label>
          <div className={styles.forgetPassword}>
            <Link to="/forgetpaswword">
              <span>Forget Password ?</span>
            </Link>
          </div>
          <span id="error"></span>
          {/*---------------------------------------------------------*/}
          <button onClick={HnadleLogin}>Log In</button>
          <button>
            <i className="fa-brands fa-google"></i> {" | "} Continue with Google
          </button>

          <div className={styles.DYH}>
            <span>
              Are You Don't Have Account :{" "}
              <Link to="/Register">
                <small>Register?</small>
              </Link>
            </span>
          </div>
        </div>
        {/*---------------------------------------------------------*/}

        {/*---------------------------------------------------------*/}
      </div>
    </div>
  );
}

export default Login;
