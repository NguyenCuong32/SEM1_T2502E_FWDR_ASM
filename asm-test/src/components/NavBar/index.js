import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src="https://png.pngtree.com/element_our/sm/20180415/sm_5ad31d9b53530.jpg"
          alt="navbar-logo"
          className="navbar__logo-img"
        />
      </div>
      <ul className="navbar__links">
        <li>
          <Link to={"/cotainer"}>About Us</Link>
        </li>
        <li>
          <Link to={"/about"}>Music</Link>
        </li>
        <li>
          <Link to={"/product"}>Album</Link>
        </li>
      </ul>
      <div className="navbar__btn">
        <Link to={"/login"}>
          <button className="navbar__btn-login">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="navbar__btn-register">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
