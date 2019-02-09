import React, { Component } from "react";
//import logo from './logo.svg'; add img from src
import "./App.css";
import observationService from "./Services/observationService";
import Menubar from './Components/Menu'
import { BrowserRouter as Router, Route } from "react-router-dom";
import ObsListing from "./Components/obsListing";
import ObsForm from "./Components/obsForm";
// import notification

class App extends Component {
  constructor() {
    super();
    this.state = {
      observations: [],
      message: ""
    };
  }

  componentDidMount = async () => {
    const getObs = await observationService.getAll();
    this.setState({
      observations: getObs
	});
	this.orderByDate()
  };

  addObservation = async observation => {
    const addedObs = await observationService.create(observation);
    this.setState({
      observations: this.state.observations.concat(addedObs),
      message: `you created: ${addedObs.birdname}`
    });
    setTimeout(() => {
      this.setState({ message: "" });
    }, 5000);
  };

  deleteObservation = async observation => {
    const result = window.confirm("Confirm delete");
    if (result) {
      await observationService.destroy(observation.id);
      this.setState({
        observations: this.state.observations.filter(
          obs => obs.id.toString() !== observation.id
        ),
        message: "Observation deleted"
      });
      setTimeout(() => {
        this.setState({ message: "" });
      }, 5000);
    }
  };

  handleFieldChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // newest comes first
  orderByDate = event => {
    let byDateOrder = this.state.observations.sort((a,b) => {
		return new Date(a.date).getTime -
		new Date(b.date).getTime
	}).reverse()
	this.setState({observations: byDateOrder})
  };
  


  // add filtering, change ul mapping
  render() {
    return (
      <div>
        <Router>
          <div className="container">
			<Menubar />
            <Route
              exact
              path="/"
              render={() => (
                <ObsListing observations={this.state.observations} />
              )}
            />
            <Route
              exact
              path="/createobservation"
              render={({ history }) => (
                <ObsForm
                  history={history}
                  addobservation={this.addObservation}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
