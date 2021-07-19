import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Header (){
  return (
    <Navbar collapseOnSelect  expand="md" variant="dark">

    <Container>
    <Navbar.Brand className="logo">Animely</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
      <Link className="nav-links" to="/">
        <Nav.Link >Home</Nav.Link>
      </Link>
      <Link className="nav-links" to="/">
        <Nav.Link >Discover</Nav.Link>
      </Link>
      <Link className="nav-links" to="/">
        <Nav.Link >My List</Nav.Link>
      </Link>
      <Link className="nav-links" to="/">
        <Nav.Link >Login</Nav.Link>
      </Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header