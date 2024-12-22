import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${form.email}!`);
    setForm({ email: "", password: "" });
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button btn">
            Login
          </button>
        </form>

        {/* Line with "Don't have an account? Create" text */}
        <div className="signup-prompt mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="signup-link">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;