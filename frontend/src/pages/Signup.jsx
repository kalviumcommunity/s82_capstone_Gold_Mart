// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css'; // Reuse login styles

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const isStrongPassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } = formData;

    // Validate empty fields
    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    // Validate password strength
    if (!isStrongPassword(password)) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    // Match password
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    console.log('User Registered:', formData);
    navigate('/'); // Go to login
  };

  return (
    <div className="auth-container">
      <h1 className="app-title">GoldMart</h1>
      <form onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign Up</button>

        <p>
          Already have an account?{" "}
          <Link to="/" className="link">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
