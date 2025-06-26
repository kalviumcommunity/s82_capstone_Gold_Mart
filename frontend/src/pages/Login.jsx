import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!email) errs.email = "Email can't be empty";
    if (!password) errs.password = "Password can't be empty";
    else if (password.length < 6)
      errs.password = "Password should be at least 6 characters";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    if (remember) {
      localStorage.setItem("savedEmail", email);
      localStorage.setItem("savedPassword", password);
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }

    // Handle login logic here
    console.log("Logged in with:", { email, password });
    // navigate("/dashboard");
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>GoldMart</h1>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <div style={styles.row}>
            <label style={styles.label}>
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              &nbsp;Remember me
            </label>
            <button
              type="button"
              onClick={() => navigate("/reset-password")}
              style={styles.linkBtn}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" style={styles.loginBtn}>
            Login
          </button>

          <p style={styles.bottomText}>
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              style={styles.linkBtn}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAF3DD", // light gold background
  },
  container: {
    backgroundColor: "#f1f1f1",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "350px",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#D99201", // gold
    fontWeight: "bold",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "20px",
    color: "#1A3F22", // dark green
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    margin: "8px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  error: {
    fontSize: "12px",
    color: "red",
    textAlign: "left",
    marginBottom: "5px",
    marginTop: "-5px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginTop: "10px",
  },
  label: {
    display: "flex",
    alignItems: "center",
  },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#905A01",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "13px",
    padding: 0,
  },
  loginBtn: {
    backgroundColor: "#D99201", // gold
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    marginTop: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  bottomText: {
    fontSize: "14px",
    marginTop: "15px",
  },
};

export default Login;
