import React from "react";

const CarList = props => {
  return (
    <tr>
      <td>{props.key}</td>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.year}</td>
    </tr>
  );
};

export default CarList;
