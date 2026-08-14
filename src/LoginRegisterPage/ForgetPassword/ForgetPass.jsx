import Forget from "./Forget.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, resetPassword } from "../../Api/authApi";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSendOtp() {
    try {
      setIsSubmitting(true);
      setError("");
      setMessage("");
      await forgotPassword(email);
      setIsOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (requestError) {
      setError(requestError.message || "Unable to send OTP");
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResetPassword() {
    try {
      setIsSubmitting(true);
      setError("");
      setMessage("");

      if (newPassword !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      await resetPassword(email, otp, newPassword);
      setMessage("Password reset successfully.");
      setTimeout(() => navigate("/Login"), 1200);
    } catch (requestError) {
      setError(requestError.message || "Reset failed");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={Forget.holder}>
      <div className={Forget.forgetcontainer}>
        <div className={Forget.emaillabel}>
          <label>
            <p>Write Down E-mail</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Put Your E-mail"
            />
          </label>

          {!isOtpSent ? (
            <div className={Forget.otpbutton}>
              <button
                className={Forget.otpaction}
                onClick={handleSendOtp}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send OTP"}
              </button>
            </div>
          ) : (
            <>
              <label>
                <p>Enter OTP</p>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="OTP"
                />
              </label>

              <label>
                <p>New Password</p>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="New password"
                />
              </label>

              <label>
                <p>Confirm Password</p>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                />
              </label>

              <div className={Forget.otpbutton}>
                <button
                  className={Forget.otpaction}
                  onClick={handleResetPassword}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Resetting..." : "Reset Password"}
                </button>
              </div>
            </>
          )}

          {message ? <p style={{ color: "green" }}>{message}</p> : null}
          {error ? <p style={{ color: "red" }}>{error}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
