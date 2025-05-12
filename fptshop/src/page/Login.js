import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h3>Email</h3>
        <input autoFocus type="email" placeholder="admin@gmail.com" />

        <h3>Password</h3>
        <input type="password" placeholder="Password" />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="login-button">LOGIN</button>

        <p className="register-text">
          Not a member ? <a href="#">Register</a>
        </p>
      </div>

      <footer className="login-footer">
        <span>🎵 <b>Musical Entertainment</b> 🎵</span>
      </footer>
    </div>
  );
};

export default Login;
