import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          React-Bootstrap
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              {" "}
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Music
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Albums
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-success">Login</Button>
        <Button variant="outline-success">Sign Up</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
