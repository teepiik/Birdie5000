import React from "react";
import Observation from "./observation";
import { ButtonToolbar, Button } from "react-bootstrap";

const ObsListing = props => {
  const obsToShow = props.observations;

  return (
    <div>
      <div className = "menu">
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
      <div>
          {obsToShow.map(obs => (
            <Observation key={obs.id} observation={obs} />
          ))}
      </div>
    </div>
  );
};

export default ObsListing;
