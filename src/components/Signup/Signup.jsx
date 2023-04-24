import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="form-ground">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form>
          <div className="form-control">
            <label htmlFor="email-field">Email</label>
            <input type="text" id="email-field" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password-field">Password</label>
            <input type="password" id="password-field" name="password" />
          </div>
          <div className="form-control">
            <label htmlFor="confirm-password-field">Confirm password</label>
            <input
              type="password"
              id="confirm-password-field"
              name="confirm-password-"
            />
          </div>
          <button type="submit" className="btn-submit">
            Sign Up
          </button>
        </form>
        <p className="form-link-text">
          Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
