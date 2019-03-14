import React, { Component } from "react";
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";
import { Table } from "reactstrap";

/* import { prependOnceListener } from "cluster"; */

class Car extends Component {
  state = {
    cars_owned: [
      {
        year: 2003,
        make: "Nissan",
        model: "350z",
        id: 1
      },
      {
        year: 2008,
        make: "Toyoa",
        model: "Corolla",
        id: 2
      }
    ]
  };

  handleAddCar = (make, model, year) => {
    this.setState(prevState => {
      return {
        cars_owned: [
          ...prevState.cars_owned,
          {
            year: year,
            make: make,
            model: model
          }
        ]
      };
    });
  };

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
            </tr>
          </thead>
          <tbody>
            {this.state.cars_owned.map(cars_owned => (
              <CarList
                year={cars_owned.year}
                make={cars_owned.make}
                model={cars_owned.model}
                key={cars_owned.id}
              />
            ))}
          </tbody>
        </Table>
        <AddCarForm addCar={this.handleAddCar} />
      </div>
    );
  }
}

export default Car;
