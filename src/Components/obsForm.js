import React from "react";

class ObsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      birdname: "",
      birdrarity: "",
      notes: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
	e.preventDefault();
	const date = Date()
    this.props.addobservation({
      birdname: this.state.birdname,
      birdrarity: this.state.birdrarity,
      date: date,
      notes: this.state.notes
    });
    this.props.history.push("/");
  };
  // change forms rarity to radiobutton

  render() {
    return (
      <div>
        <h2> Add new observation </h2>

        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Bird name</label>
            <input
              type="text"
              name="birdname"
              value={this.state.birdname}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Rarity</label>
            <input
              type="text"
              name="birdrarity"
              value={this.state.birdrarity}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Notes</label>
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
