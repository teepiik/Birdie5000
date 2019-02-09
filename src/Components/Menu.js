import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "react-bootstrap";

const Menubar = props => {

  return (
    <Navbar inverse collapseOnSelect>
        <NavbarBrand>
          <Link to={`/`}>Frontpage</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to={`/createobservation`}>Create observation</Link>
        </NavbarBrand>
    </Navbar>
  );
};

export default Menubar;
