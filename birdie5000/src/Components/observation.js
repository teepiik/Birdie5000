import React from 'react'

const Observation = ({observation}) => {
    return (
        <div>
        <li className="Observation"> 
            <h2>{observation.birdname}</h2>
            <p>{observation.birdrarity}</p>
            <p>{observation.notes}</p>
            <p>{observation.date}</p>
        </li>
        </div>
    )
}

export default Observation