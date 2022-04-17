import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Link className="nav-link" to="home#services">
              Services
            </Link>
            <Link className="nav-link" to="/Blogs">
              Blogs
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            {user ? (
              <button onClick={() => signOut(auth)}>Sign Out</button>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
