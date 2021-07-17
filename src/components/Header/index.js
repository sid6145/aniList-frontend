import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Header (){
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className="logo">My Anime List</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
      <Link to="/">
        <Nav.Link className="nav-links">Home</Nav.Link>
      </Link>
        
        <Nav.Link className="nav-links">Discover</Nav.Link>
        <Nav.Link className="nav-links">My List</Nav.Link>
        <Nav.Link className="nav-links">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header