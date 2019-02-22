import React from "react";

class ObsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      birdname: "",
      birdrarity: "Common", // because prechecked by radiobutton
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
    const date = Date();
    const result = window.confirm("Add observation");
    if (result) {
      this.props.addobservation({
        birdname: this.state.birdname,
        birdrarity: this.state.birdrarity,
        date: date,
        notes: this.state.notes
      });
      this.props.history.push("/");
    } else {
      // dont reset rarity, becouse radiobutton is checked where it is
      this.setState({
        birdname: "",
        notes: ""
      });
    }
  };

  render() {
    return (
      <div>
        <h2> Add new observation </h2>

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
            <label className="formLabel">Rarity</label> &nbsp; Common &nbsp;
            <input
              defaultChecked
              type="radio"
              name="birdrarity"
              value="Common"
              onChange={this.handleChange}
            />
            &nbsp; Rare &nbsp;
            <input
              type="radio"
              name="birdrarity"
              value="Rare"
              onChange={this.handleChange}
            />
            &nbsp; Extremely Rare &nbsp;
            <input
              type="radio"
              name="birdrarity"
              value="Extremely Rare"
              onChange={this.handleChange}
            />
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
