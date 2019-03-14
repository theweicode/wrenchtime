import React, { Component } from "react";

class AddCarForm extends Component {
  state = {
    make: "",
    model: "",
    year: 0
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCar(this.state.make, this.state.model, this.state.year);
    this.setState({ make: "", model: "", year: 0 });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.make}
          onChange={this.handleValueChange}
          placeholder="Enter car's make"
          name="make"
        />
        <input
          type="text"
          value={this.state.model}
          onChange={this.handleValueChange}
          placeholder="Enter car's model"
          name="model"
        />
        <input
          type="text"
          value={this.state.year}
          onChange={this.handleValueChange}
          placeholder="Enter car's year"
          name="year"
        />
        <input type="submit" value="Add Car" />
      </form>
    );
  }
}

export default AddCarForm;
