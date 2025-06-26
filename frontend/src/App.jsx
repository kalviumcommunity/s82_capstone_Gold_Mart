import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ Import your components
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App; // ✅ Must export as default
