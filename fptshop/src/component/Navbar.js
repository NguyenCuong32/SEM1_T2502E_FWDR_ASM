import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎵 Musical</div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/">About Us</Link>
        <Link className="navbar-link" to="/">Music</Link>
        <Link className="navbar-link" to="/">Albums</Link>
      </div>
      <div className="navbar-auth">
        <Link className="btn-signin" to="/login">Sign In</Link>
        <Link className="btn-signup" to="/register">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
