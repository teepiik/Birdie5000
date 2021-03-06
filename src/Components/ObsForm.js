import React from "react";
import validateObservation from "../Services/validationService";
import {Alert} from 'react-bootstrap'

class ObsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      birdname: "",
      birdrarity: "Common", // because prechecked by radiobutton
      notes: "",
      errors: null
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // temporary solution to warn users
    if (!navigator.onLine) {
      window.alert(
        "You seem to be in Offline, not able to add new obs when offline atm"
      );
    } else {
      const date = Date();
      const location = await this.loadPosition();

      const mockBird = {
        birdname: this.state.birdname,
        notes: this.state.notes
      };

      let errors = validateObservation(mockBird);
      if (errors.length > 0) {
        this.setState({ errors });
        setTimeout(() => {
          this.setState({ errors: null });
        }, 10000);
        return;
      }

      const result = window.confirm("Add observation");
      if (result) {
        this.props.addobservation({
          birdname: this.state.birdname,
          birdrarity: this.state.birdrarity,
          date: date,
          notes: this.state.notes,
          latitude: location.lat,
          longitude: location.long
        });
        this.props.history.push("/");
      } else {
        // dont reset rarity, becouse radiobutton is checked where it is
        this.setState({
          birdname: "",
          notes: ""
        });
      }
    }
  };

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      return {
        lat: latitude,
        long: longitude
      };
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h2> Add new observation </h2>

        {this.state.errors ?
        <div>
          {this.state.errors.map(error => <Alert variant='primary'>{error}</Alert>)}
        </div>
        :
        <div></div>}

        <form onSubmit={this.handleSubmit}>
          <p>
            <label className="formLabel">Bird name &nbsp;</label>
            <input
              type="text"
              name="birdname"
              value={this.state.birdname}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label className="formLabel">Rarity</label> <br />
            <input
              defaultChecked
              type="radio"
              name="birdrarity"
              value="Common"
              onChange={this.handleChange}
            />
            &nbsp; Common &nbsp; <br />
            <input
              type="radio"
              name="birdrarity"
              value="Rare"
              onChange={this.handleChange}
            />
            &nbsp; Rare &nbsp; <br />
            <input
              type="radio"
              name="birdrarity"
              value="Extremely Rare"
              onChange={this.handleChange}
            />
            &nbsp; Extremely Rare <br />
          </p>
          <p>
            <label className="formLabel">Notes</label> &nbsp;
            <input
              type="text"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </p>
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default ObsForm;
