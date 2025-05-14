import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎵 Musical</div>
      <ul>
        <li>About Us</li>
        <li>Music</li>
        <li>Albums</li>
      </ul>
      <div>
        <button className="btn">Sign In</button>
        <button className="btn outline">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
