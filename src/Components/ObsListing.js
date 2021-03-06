import React from "react";
import Observation from "./Observation";
import { ButtonToolbar, Button } from "react-bootstrap";

const ObsListing = props => {
  const obsToShow = props.observations;

  return (
    <div>
      <div className = "sorting">
        <p className="Listing">Order observation by</p>
        <ButtonToolbar>
          <Button className="sortButton" variant="dark" size="sm" onClick={props.orderByDate}>
            Date
          </Button>
          <Button className="sortButton" variant="dark" size="sm" onClick={props.orderByName}>
            Name
          </Button>
          <Button className="sortButton" variant="dark" size="sm" onClick={props.orderByRarity}>
            Rarity
          </Button>
        </ButtonToolbar>
      </div>
      <div className="obsListing">
          {obsToShow.map(obs => (
            <Observation key={obs.id} observation={obs} />
          ))}
      </div>
    </div>
  );
};

export default ObsListing;
