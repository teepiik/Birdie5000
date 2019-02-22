import React from "react";
import moment from "moment"

// Most CSS classNames added for shallow testing

const Observation = ({ observation }) => {
  return (
    <div className="Observation">
        <h1 className="display-4">{observation.birdname} </h1>
        <h5 className="birdRarity">Rarity: {observation.birdrarity} </h5>
        <h5 className="obsTimestamp">{moment(observation.date).format('MMMM Do YYYY, HH:mm')} </h5>
        <h6 className="obsLocation">Latitude: {observation.latitude} Longitude: {observation.longitude} </h6>
        <h6 className="obsNotes">Notes: {observation.notes} </h6>
    </div>
  );
};

export default Observation;
