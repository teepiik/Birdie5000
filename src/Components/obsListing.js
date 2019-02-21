import React from "react";
import Observation from "./observation";
import { ButtonToolbar, Button } from "react-bootstrap";

const ObsListing = props => {
  const obsToShow = props.observations;

  return (
    <div>
      <div>
        <p className="Listing">Order observation by</p>
        <ButtonToolbar>
          <Button variant="dark" size="sm" onClick={props.orderByDate}>
            Date
          </Button>
          <Button variant="dark" size="sm" onClick={props.orderByName}>
            Name
          </Button>
          <Button variant="dark" size="sm" onClick={props.orderByRarity}>
            Rarity
          </Button>
        </ButtonToolbar>
      </div>
      <div>
        <ul>
          {obsToShow.map(obs => (
            <Observation key={obs.id} observation={obs} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ObsListing;
