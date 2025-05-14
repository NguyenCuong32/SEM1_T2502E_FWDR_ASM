import React from 'react';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <span>Musical</span>
      </div>
      <nav className="nav">
        <a href="#">About Us</a>
        <a href="#">Music</a>
        <a href="#">Albums</a>
      </nav>
      <div className="auth">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}
export default Header;