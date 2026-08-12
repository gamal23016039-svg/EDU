import Forget from "./Forget.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ForgetPassword() {
  const [forget, setForget] = useState("");

  return (
    <div className={Forget.holder}>
      <div className={Forget.forgetcontainer}>
        <div className={Forget.emaillabel}>
          <label>
            <p> Write Down E-mail</p>
            <input
              type="text"
              value={forget}
              onChange={(e) => setForget(e.target.value)}
              placeholder="Put Your E-mail"
            />
          </label>
        </div>
        <div className={Forget.otpbutton}>
          <Link to="/putotp" className={Forget.otplink}>
            <button className={Forget.otpaction}>Send OTP</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ForgetPassword;
