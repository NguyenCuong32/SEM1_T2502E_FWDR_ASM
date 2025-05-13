import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="music-icon">♪</span> Musical
        </Link>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Music</Link>
            </li>
            <li>
              <Link to="/">Albums</Link>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
          <Link to="/register" className="btn btn-outline">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
