import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./login.css";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async () => {
    if (!email) return alert("Please enter your email!");
    setLoading(true);
    try {
      await axios.post("http://localhost:3001/karupati/api/send-otp", { email });
      setOtpSent(true);
      setShowOtpModal(true);
    } catch (error) {
      alert("Error sending OTP!");
    }
    setLoading(false);
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP!");
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/karupati/api/verify-otp", { email, otp });
      if (response.data.status) {
        alert("Login successful!");
        localStorage.setItem("userLoggedIn", "true"); // Store login state
        setIsLoggedIn(true); // Update state
        navigate("/"); // Redirect properly
      } else {
        alert("Invalid OTP!");
      }
    } catch (error) {
      alert("OTP verification failed!");
    }
    setLoading(false);
  };

  const handleResendOtp = async () => {
    handleEmailLogin(); // Resend OTP
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post("http://localhost:5000/api/google-login", {
        token: credentialResponse.credential,
      });
      if (response.data.success) {
        alert("Google Login successful!");
        localStorage.setItem("userLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      alert("Google Login failed!");
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="login-container">
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-xl font-semibold mb-4">Login</h2>

            {/* Email Login */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={handleEmailLogin}
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            <div className="text-center my-3 or-text">OR</div>

            {/* Google Login */}
            <GoogleLogin onSuccess={handleGoogleLogin} onError={() => alert("Google Login Failed!")} />
          </div>
        </div>

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3">Enter OTP</h3>
              <input
                type="text"
                className="w-full p-2 border rounded mb-2"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button 
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
              <button 
                className="text-blue-500 mt-2 block"
                onClick={handleResendOtp}
              >
                Resend OTP
              </button>
            </div>
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
