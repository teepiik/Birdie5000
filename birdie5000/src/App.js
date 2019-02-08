import React, { Component } from 'react';
//import logo from './logo.svg'; add img from src
import './App.css';
import observationService from './Services/observationService'
import Observation from './Components/observation'
// import notification

class App extends Component {

constructor() {
  super()
  this.state = {
    observations: [],
    message: ""
  }
}

componentDidMount = async () => {
  const getObs = await observationService.getAll()
  this.setState({
    observations: getObs
  })
}

addObservation = (event) => {
  event.preventDefault()
}
  // add filtering, change ul mapping
  render() {
    const obsToShow = this.state.observations
    console.log(this.state.observations)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Coming soon
          </p>
        </header>
        <ul>
          {obsToShow.map(obs =>
            <Observation key={obs.id}
            observation={obs}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
