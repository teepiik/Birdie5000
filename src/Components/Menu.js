import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand } from "react-bootstrap";

const Menubar = props => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <NavbarBrand>
          <Link to={`/`}>Frontpage</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to={`/createobservation`}>Create observation</Link>
        </NavbarBrand>
      </Navbar>
      <div>
        Order by:
        <button onClick={props.orderByDate}>Date</button>
        <button onClick={props.orderByName}>Name</button>
        <button onClick={props.orderByDate}>Date</button>
      </div>
    </div>
  );
};

export default Menubar;
