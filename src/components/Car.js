import React from "react";
import AddCarForm from "./AddCarForm";
import CarList from "./CarList";

const Car = () => (
  <div className="container">
    <img className="showcase" src="https://i.imgur.com/qLtnksU.jpg" />
    <h3>Add Car Form</h3>

    <AddCarForm />
    <CarList />
  </div>
);

export default Car;
