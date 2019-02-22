import React from "react";
import moment from "moment"

const Observation = ({ observation }) => {
  return (
    <div className="Observation">
        <h1 className="display-4">{observation.birdname} </h1>
        <h5>Rarity: {observation.birdrarity} </h5>
        <h5>{moment(observation.date).format('MMMM Do YYYY, HH:mm')} </h5>
        <h6>Notes: {observation.notes} </h6>
    </div>
  );
};

export default Observation;
