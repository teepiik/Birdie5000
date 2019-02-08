import React, { Component } from 'react';
//import logo from './logo.svg'; add img from src
import './App.css';
import observationService from './Services/observationService'
//import Menu from './components/Menu'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ObsListing from './Components/obsListing'
import ObsForm from './Components/obsForm'
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

addObservation = async (observation) => {
  const addedObs = await observationService.create(observation)
  this.setState({
    observations: this.state.observations.concat(addedObs),
    message: `you created: ${addedObs.birdname}`
  })
  setTimeout(() => {
    this.setState({ message: '' })
  }, 5000)
    
}

deleteObservation = async (observation) => {
  const result = window.confirm('Confirm delete')
  if (result) {
    await observationService.destroy(observation.id)
    this.setState({
      observations: this.state.observations.filter(
        obs => obs.id.toString() !== observation.id),
        message: 'Observation deleted'
    })
    setTimeout(() => {
      this.setState({ message: '' })
    }, 5000)
  }
}

handleFieldChanges = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}
  // add filtering, change ul mapping
  render() {

    return (
      <div>
        <Router>
          <div className="container">

        <header className="App-header">
          <p>
            Coming soon
          </p>
          <div> <Link to={`/createobservation`}>Add new observation</Link></div>
        </header>
        <Route exact path="/" render={() => <ObsListing observation={this.state.observations} />} /> 
        <Route exact path="/createobservation" render={({ history }) => <ObsForm history={history} addObservation={this.addObservation} />}/>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
