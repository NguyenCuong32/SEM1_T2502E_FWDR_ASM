import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center gap-2">
          <img
            src="./image/music-player.png"
            alt="logo"
            width="50px"
            height="50px"></img>
          <b>Musical</b>
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="Navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/about">
              About us
            </NavLink>
            <NavLink className="nav-link" to="/Media">
              Music
            </NavLink>
            <NavLink className="nav-link" to="/Media">
              Albums
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <NavLink to="/login" className="nav-link">
          <button className="btn btn-primary">Login</button>
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          <button className="btn btn-success">Sign Up</button>
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default Header;
