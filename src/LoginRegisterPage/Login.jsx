import styles from "./LoginRegister.module.css";
import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Logo from "../assets/The-Logo.svg";
import Gmail from "../assets/Mail.svg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Api/Authlogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInput = useRef(null);
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setIsSubmitting(true);
      setErrorMessage("");

      const result = await login(email, password);
      const safeUser = {
        ...result.user,
        email,
      };

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(safeUser));
      setToken(result.token);
      setUser(safeUser);

      const role = String(safeUser.role || "").toLowerCase();
      if (role === "admin") navigate("/dashboardadmin");
      else if (role === "teacher") navigate("/dashboardteacher");
      else navigate("/dashboardstudent");
    } catch (error) {
      setErrorMessage(error.message || "Invalid E-mail or Password");
    } finally {
      setIsSubmitting(false);
    }
  }

  useEffect(() => {
    nameInput.current?.focus();
  }, []);

  return (
    <div className={styles.theDad}>
      <div className={styles.loginPage}>
        <div className={styles.theLeftSide}>
          <img src={Gmail} className={styles.thePhoto} alt="" />
        </div>

        <div className={styles.theRightSide}>
          <div className={styles.eduGatePhoto}>
            <img src={Logo} alt="" />
          </div>

          <label>
            <span> E-mail : </span>
            <input
              ref={nameInput}
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
          <div className={styles.forgetPassword}>
            <Link to="/forgetpassword">
              <span>Forget Password ?</span>
            </Link>
          </div>
          {errorMessage ? (
            <span style={{ color: "red" }}>{errorMessage}</span>
          ) : null}

          <button onClick={handleLogin} disabled={isSubmitting}>
            {isSubmitting ? "Logging In..." : "Log In"}
          </button>
          <button type="button">
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
      </div>
    </div>
  );
}

export default Login;
