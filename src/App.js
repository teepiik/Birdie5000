import React, { Component } from "react";
//import logo from './logo.svg'; add img from src
import "./App.css";
import observationService from "./Services/ObservationService";
import Menubar from "./Components/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ObsListing from "./Components/ObsListing";
import ObsForm from "./Components/ObsForm";
import Notification from "./Components/Notification";

class App extends Component {
  constructor() {
    super();
    this.state = {
      observations: [],
      message: "",
      orderByDate: true,
      orderByName: false,
      orderByRarity: false
    };
  }

  componentDidMount = async () => {
    const getObs = await observationService.getAll();
    this.setState({
      observations: getObs
    });
    this.orderByDate();
  };

  addObservation = async observation => {
    const addedObs = await observationService.create(observation);
    this.setState({
      observations: this.state.observations.concat(addedObs),
      message: `you added observation of : ${addedObs.birdname}`
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
    if (this.state.orderByDate === true) {
      let reverse = this.state.observations.reverse();
      this.setState({
        observations: reverse
      });
      return;
    }

    let byDateOrder = this.state.observations
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })
      .reverse();
    this.setState({
      observations: byDateOrder,
      orderByDate: true,
      orderByName: false,
      orderByRarity: false
    });
  };

  // sort alphabetically
  orderByName = event => {
    // reverse order, if already ordered by name
    if (this.state.orderByName === true) {
      let reverse = this.state.observations.reverse();
      this.setState({
        observations: reverse
      });
      return;
    }

    let byAlphabeticalOrder = this.state.observations.sort((a, b) => {
      if (a.birdname.toUpperCase() < b.birdname.toUpperCase()) return -1;
      else if (a.birdname.toUpperCase() > b.birdname.toUpperCase()) return 1;
      return 0;
    });
    this.setState({
      observations: byAlphabeticalOrder,
      orderByRarity: false,
      orderByName: true,
      orderByDate: false
    });
  };

  // sort by rarity
  orderByRarity = event => {
    // reverse order, if already ordered by rarity
    if (this.state.orderByRarity === true) {
      let reverse = this.state.observations.reverse();
      this.setState({
        observations: reverse
      });
      return;
    }

    let commons = [],
      rares = [],
      extraRares = [],
      orderedByRarity = [];

    this.state.observations.forEach(o => {
      if (o.birdrarity === "Common") {
        commons.push(o);
      } else if (o.birdrarity === "Rare") {
        rares.push(o);
      } else {
        extraRares.push(o);
      }
    });
    orderedByRarity = orderedByRarity.concat(commons, rares, extraRares);

    this.setState({
      observations: orderedByRarity,
      orderByRarity: true,
      orderByName: false,
      orderByDate: false
    });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Menubar />
            <Notification message={this.state.message} />
            <div className="container">
              <Route
                exact
                path="/"
                render={() => (
                  <ObsListing
                    observations={this.state.observations}
                    orderByDate={this.orderByDate}
                    orderByName={this.orderByName}
                    orderByRarity={this.orderByRarity}
                    state={this.state}
                  />
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
