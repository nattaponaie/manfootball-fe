import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">แมนๆ เตะบอล</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink className="p-2" exact to="/">Home</NavLink>
                <NavLink className="p-2" exact to="/profile">Profile</NavLink>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
}

export default NavbarComponent;
