import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header() {
  return (
    <Navbar className="navBar" collapseOnSelect expand="md" variant="dark">
      <Container>
        <Navbar.Brand className="logo">Animely</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              {" "}
              <Link className="nav-links" to="/">
                Home{" "}
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="nav-links" to="/discover">
                Discover{" "}
              </Link>
            </Nav.Link>

            <Nav.Link>
              {" "}
              <Link className="nav-links" to="/list">
                My List{" "}
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="nav-links" to="/login">
                Login{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
