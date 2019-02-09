import React from "react";

const Observation = ({ observation }) => {
  return (
    <div>
      <li className="Observation">
        <h2 className="Observation">{observation.birdname} </h2>
        <p className="Observation">Rarity: {observation.birdrarity} </p>
        <p className="Observation">Time: {observation.date} </p>
        <p className="Observation">Notes: {observation.notes} </p>
        
      </li>
    </div>
  );
};

export default Observation;
