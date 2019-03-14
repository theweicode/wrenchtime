import React, { Component } from "react";
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";
import { Table } from "reactstrap";
/* import firebase from "firebase/app";
import FBConfig from "./FBConfig"; */
import firebase from "firebase/app";

class Car extends Component {
  state = {
    cars_owned: []
  };

  componentDidMount() {
    var carsRef = firebase.firestore().collection("cars");
    var query = carsRef
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }

        snapshot.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
          //** attempt to put this snapshot of data to use */
          var newArray = this.state.cars_owned.slice();
          newArray.push(doc.data());
          this.setState({ cars_owned: newArray });
          console.log("this.state.cars_owned: ", this.state.cars_owned);
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  render() {
    return (
      <div className="container">
        <img className="showcase" src="https://i.imgur.com/qLtnksU.jpg" />

        <h3>Car List</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Make</th>
              <th>Model</th>
              <th>Year</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars_owned.map(cars_owned => (
              <CarList
                year={cars_owned.year}
                make={cars_owned.make}
                model={cars_owned.model}
                key={cars_owned.id.toString()}
                id={cars_owned.id}
              />
            ))}
          </tbody>
        </Table>
        <AddCarForm />
      </div>
    );
  }
}

export default Car;
