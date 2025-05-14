import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">🎵 Musical</div>
      <div className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Music</a>
        <a href="#">Albums</a>
      </div>
      <div className="nav-buttons">
        <button className="btn">Sign In</button>
        <button className="btn">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
