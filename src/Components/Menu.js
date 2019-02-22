import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Menubar = props => {
  return (
    <div className="menu">
      <Navbar bg="dark" variant="dark" expand={true}>
        <Navbar.Brand href="#home">Birdie5000</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <NavLink exact className= "nav-link" to={`/`}>Home</NavLink>
            <NavLink className= "nav-link" to={`/createobservation`}>Create observation</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};


export default Menubar;
