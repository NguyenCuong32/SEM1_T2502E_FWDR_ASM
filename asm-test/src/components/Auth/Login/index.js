import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__form">
        <h2 className="login__form-title">Login</h2>
        <form>
          <div className="login__form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="login__form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="login__form-check">
            <div className="login__form-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <p>
              <a href="/forgot-password" className="login__form-link">
                Forgot Password?
              </a>
            </p>
          </div>
          <button type="submit" className="login__form-button">
            Login
          </button>
        </form>
        <div className="login__form-footer">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="login__form-link">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
