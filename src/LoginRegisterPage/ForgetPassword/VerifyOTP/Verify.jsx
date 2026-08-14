import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyEmail } from "../../../Api/authApi";
import styles from "./Verfiy.module.css";

function Verify() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailFromQuery = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailFromQuery);
  const [otp, setOtp] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isReady = useMemo(() => email.trim() && otp.trim(), [email, otp]);

  async function handleVerify() {
    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setStatusMessage("");

      if (!email.trim() || !otp.trim()) {
        setErrorMessage("Please enter both email and OTP.");
        return;
      }

      const result = await verifyEmail(email.trim(), otp.trim());
      setStatusMessage(
        result?.msg || "Your account has been verified successfully.",
      );

      setTimeout(() => navigate("/Login"), 1200);
    } catch (error) {
      setErrorMessage(error.message || "Verification failed.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Verify Your Account</h1>
        <p>Enter the 6-digit code sent to your email address.</p>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>

        <label>
          <span>OTP Code</span>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.trim())}
            placeholder="123456"
            maxLength={6}
          />
        </label>

        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        {statusMessage ? (
          <p className={styles.success}>{statusMessage}</p>
        ) : null}

        <button onClick={handleVerify} disabled={isSubmitting || !isReady}>
          {isSubmitting ? "Verifying..." : "Verify"}
        </button>
      </div>
    </div>
  );
}

export default Verify;
