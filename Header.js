import './Header.css';

function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="../logo.jpg" alt="Logo" />
        </div>

        <ul className="navbar-menu">
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/albums">Albums</a></li>
        </ul>

        <div className="nav-buttons">
          <a href="/login"><button >Sign In</button></a>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
