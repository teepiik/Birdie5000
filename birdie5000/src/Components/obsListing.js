import React from 'react'
import Observation from './observation'



const ObsListing= (props) => {
    
    const obsToShow = props.observations
    
    return (
        <ul>
            {obsToShow.map(obs =>
            <Observation key={obs.id}
            observation={obs}/>)}
        </ul>
    )
} 


export default ObsListing
