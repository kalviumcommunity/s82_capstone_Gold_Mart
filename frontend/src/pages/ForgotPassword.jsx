import React from "react";

const ForgotPassword = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Send Reset Link</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
