import './header.css';
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header () {
    return (
        <Navbar expand="lg" className='bg-light'>
            <Container>
                <Navbar.Brand>
                    <img className='img-logo' src='/images/logo.png' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex justify-content-between w-100 align-items-center">
                        <Nav className="nav-group">
                            <NavLink to="/about_us" className="text-gray fw-bold mx-3 nav-link">About Us</NavLink>
                            <NavLink to="/music" className="text-gray fw-bold mx-3 nav-link">Music</NavLink>
                            <NavLink to="/albums" className="text-gray fw-bold mx-3 nav-link">Albums</NavLink>
                        </Nav>
                        <div className='btn-group'>
                            <NavLink to="/sign_in" className="mx-1">
                                <button className='sign-in'>Sign In</button>
                            </NavLink>
                            <NavLink to="/sign_up" className="mx-1">
                                <button className='sign-up'>Sign Up</button>
                            </NavLink>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Header;