import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Services</Nav.Link>
            <Nav.Link href="#features">Blogs</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
