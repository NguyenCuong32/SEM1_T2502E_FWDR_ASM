import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="container-fluid py-2 border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/" className="text-decoration-none">
          <div className="d-flex align-items-center">
            <span className="music-note me-2">♪</span>
            <h1 className="mb-0 brand-name">Musical</h1>
          </div>
        </Link>
        <nav className="d-flex align-items-center">
          <ul className="nav me-4">
            <li className="nav-item"><Link to="/about" className="nav-link text-secondary">About Us</Link></li>
            <li className="nav-item"><Link to="/music" className="nav-link text-secondary">Music</Link></li>
            <li className="nav-item"><Link to="/albums" className="nav-link text-secondary">Albums</Link></li>
            <li className="nav-item"><Link to="/artists" className="nav-link text-secondary">Artists</Link></li>
          </ul>
          <div className="auth-buttons">
            <Link to="/login" className="btn btn-primary me-2">Sign In</Link>
            <Link to="/register" className="btn btn-outline-secondary">Sign Up</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header; 