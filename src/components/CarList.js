import React from "react";

const CarList = props => {
  return (
    <tr>
      <th>{props.id}</th>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.year}</td>
    </tr>
  );
};

export default CarList;
