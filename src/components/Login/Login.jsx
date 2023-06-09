import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-ground">
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <div className="form-control">
            <label htmlFor="email-field">Email</label>
            <input type="text" id="email-field" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password-field">Password</label>
            <input type="password" id="password-field" name="password" />
          </div>
          <button type="submit" className="btn-submit">
            Login
          </button>
        </form>
        <p className="form-link-text">
          New to ema-john? <Link to="/signup">Create New Account</Link>
        </p>
        <div className="line-text">
          <hr />
          <p>or</p>
          <hr />
        </div>
        <button className="social-btn">
          <img
            src="https://img.icons8.com/color/96/null/google-logo.png"
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
