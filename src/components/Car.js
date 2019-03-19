import React, { Component } from "react";
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";
import { Table } from "reactstrap";
/* import firebase from "firebase/app";
import FBConfig from "./FBConfig"; */
import firebase from "firebase/app";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars_owned: []
    };
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.handleRemoveCar = this.handleRemoveCar.bind(this);
  }

  componentDidMount() {
    this.onRealTimeListener();
  }

  renderCarList(cars) {
    /* console.log(
      "data has been added: ",
      cars.type,
      cars.doc.id,
      cars.doc.data()
    ); */
    var newArray = this.state.cars_owned.slice();
    newArray.push(cars.doc.data());
    newArray[this.state.cars_owned.length].id = cars.doc.id;
    newArray[this.state.cars_owned.length].count = [
      this.state.cars_owned.length + 1
    ];
    this.setState({
      cars_owned: newArray
    });
  }

  handleRemoveFromList(id) {
    this.setState(prevState => {
      return {
        cars_owned: prevState.cars_owned.filter(p => p.id !== id)
      };
    });
  }

  handleRemoveCar(id) {
    firebase
      .firestore()
      .collection(this.props.email)
      .doc(id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
    this.forceUpdate();
  }

  onRealTimeListener() {
    firebase
      .firestore()
      .collection("williamting@gmail.com")
      .orderBy("year")
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if (change.type == "added") {
            this.renderCarList(change);
          } else if (change.type == "removed") {
            /* let li = cafeList.querySelector('[data-id=' + change.doc.id + ']') */
            console.log(change.type);
          }
        });
      });
  }

  render() {
    return (
      <div className="container">
        <img className="showcase" src="https://i.imgur.com/qLtnksU.jpg" />
        <AddCarForm email={this.props.email} />
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
            {this.state.cars_owned.map(car => (
              <CarList
                year={car.year}
                make={car.make}
                model={car.model}
                mileage={car.mileage}
                id={car.count}
                key={car.id}
                keyValue={car.id}
                removeCar={this.handleRemoveCar}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Car;
