import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and Sign-Up

  return (
    <div className="login-page">
      <div className="form-container">
        <h1>{isSignUp ? "Sign Up" : "Login"}</h1>

        {/* Toggle Button */}
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="toggle-button"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>

        {/* Form */}
        <form>
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-button">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Continue with Google */}
        <button className="google-button">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2FGoogle&psig=AOvVaw2fd_cBur4pAaNEtH1dL213&ust=1736610266443000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjxysK_64oDFQAAAAAdAAAAABA"
            alt="Google"
          />
          Continue with Google
        </button>

        {/* Forgot Password */}
        {!isSignUp && (
          <button className="forgot-password-button">Forgot Password?</button>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
