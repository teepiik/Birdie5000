import React from 'react'

const Observation = ({observation}) => {
    return (
        // add classname and css class to obs
        <li> 
            <h2>{observation.birdname}</h2>
            <p>{observation.birdrarity}</p>
            <p>{observation.notes}</p>
            <p>{observation.date}</p>
        </li>
    )
}

export default Observation