import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="container-fluid py-3 border-top mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <span className="music-note me-2">♪</span>
          <span>Musical Entertainment</span>
        </div>
        <span className="music-note">♪</span>
      </div>
    </footer>
  );
}

export default Footer; 