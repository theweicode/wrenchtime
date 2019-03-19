import React, { Component } from "react";
import firebase from "firebase/app";
class AddCarForm extends Component {
  state = {
    make: "",
    model: "",
    year: 1900,
    mileage: 0
  };

  handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    /*  ADDING DATA */
    var carsRef = firebase.firestore().collection(this.props.email);
    var setCar1 = carsRef.doc().set(
      {
        // need to add auto id creator
        year: this.state.year,
        make: this.state.make,
        model: this.state.model,
        mileage: this.state.mileage
      },
      { merge: true }
    );
    this.setState({ make: "", model: "", year: 0, mileage: "" });
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
        <input
          type="text"
          value={this.state.mileage}
          onChange={this.handleValueChange}
          placeholder="Enter car's mileage"
          name="mileage"
        />
        <input type="submit" value="Add Car" />
      </form>
    );
  }
}

export default AddCarForm;
