import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://media.istockphoto.com/id/1076582642/vector/eighth-note-drawn-by-hand-with-rough-brush-music-icon-symbol-logo-sketch-graffiti-grunge.jpg?s=612x612&w=0&k=20&c=XLL1sec-tAcWXdYxWIGjI2hG7ffolmgjsGCkS2CtZtk="
          alt=""
          className="navbar-logo"
        />
        <ul className="nav-link">
          <li>
            <Link to={"/container"}>About us</Link>
          </li>
          <li>
            <Link to={"/about"}>Music</Link>
          </li>
          <li>
            <Link to={"/product"}>Albums</Link>
          </li>
        </ul>
        <div className="button">
          <Link to={"/sign-in"} className="button1">
            Sign in
          </Link>
          <Link to={"/Sign up"} className="button2">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
