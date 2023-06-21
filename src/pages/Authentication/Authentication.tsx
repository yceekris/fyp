import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer/FormContainer";
import Nav from "../../components/Nav/Nav";
import "./Authentication.css";

const Authentication = () => {
  const navigate = useNavigate();
  const [otp, setOTP] = useState("");
  const [otpError, setOtpError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        // OTP verification successful, user is registered
        navigate("/dashboard");
      } else {
        setOtpError(true);
        // OTP verification failed, show an error message or take appropriate action
      }
    } catch (error) {
      console.error(error);
      // Handle any network or server errors
    }
  };

  return (
    <div className="auth">
      <Nav />
      <FormContainer
        container_class="form-container otp"
        children={
          <form onSubmit={handleSubmit} className="form" id="form">
            <div className="box">
              <label htmlFor="otpInput">Enter OTP:</label>
              <input
                type="text"
                id="otpInput"
                required
                pattern="^\d{6}$"
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button type="submit">Submit</button>
            </div>
          </form>
        }
      />
      {otpError && (
        <div className="error-message">Invalid OTP. Please try again.</div>
      )}
    </div>
  );
};

export default Authentication;
