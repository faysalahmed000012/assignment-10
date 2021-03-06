import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">David Brewster</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <CustomLink className="nav-link" to="home">
                Home
              </CustomLink>
              <CustomLink className="nav-link" to="home#services">
                Services
              </CustomLink>
              <CustomLink className="nav-link" to="/blogs">
                Blogs
              </CustomLink>
              <CustomLink className="nav-link" to="/about">
                About
              </CustomLink>
              {user ? (
                <button onClick={() => signOut(auth)}>Sign Out</button>
              ) : (
                <CustomLink className="nav-link" to="/login">
                  Login
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
