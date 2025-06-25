import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";


const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <input type="text" placeholder="Email or phone" />
        <input type="password" placeholder="Password" />
        <p className="forgot">Forgot password?</p>
        <button>Login</button>

        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>
        </p>
        <p className="forgot" onClick={() => navigate("/forgot-password")}>
  Forgot password?
</p>

      </div>
    </div>
  );
};

export default Login;
