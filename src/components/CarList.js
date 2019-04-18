import React from "react";
import { Button } from "reactstrap";

const CarList = props => {
  return (
    <tr>
      <th>{props.id}</th>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.year}</td>
      <td>
        <Button onClick={() => props.removeCar(props.keyValue)}>X</Button>
      </td>
    </tr>
  );
};

export default CarList;
