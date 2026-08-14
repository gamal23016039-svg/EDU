import styles from "./LoginRegister.module.css";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/The-Logo.svg";
import Gmail from "../assets/Mail.svg";
import { register } from "../Api/AuthRegister";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameInput = useRef(null);
  const navigate = useNavigate();

  async function handleRegister() {
    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setSuccessMessage("");

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      await register({
        firstName,
        lastName,
        userName,
        email,
        password,
        confirmPassword,
      });

      setSuccessMessage(
        "Registration successful. Please verify your email using the OTP sent to your inbox.",
      );
      setTimeout(
        () => navigate(`/verify?email=${encodeURIComponent(email)}`),
        1200,
      );
    } catch (error) {
      setErrorMessage(error.message || "Something went wrong");
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
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </label>
          </div>

          <label>
            <span> Username : </span>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Username"
              required
            />
          </label>

          <label>
            <span> E-mail : </span>
            <input
              type="email"
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

          <label className="password">
            <span> Confirm Password : </span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </label>

          {errorMessage ? (
            <span style={{ color: "red" }}>{errorMessage}</span>
          ) : null}
          {successMessage ? (
            <span style={{ color: "green" }}>{successMessage}</span>
          ) : null}

          <button onClick={handleRegister} disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
