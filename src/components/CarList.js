import React from "react";

const CarList = props => {
  return (
    <tr>
      <th>{props.id}</th>
      <td>{props.make}</td>
      <td>{props.model}</td>
      <td>{props.year}</td>
      <td>
        <form type="submit" onClick={() => props.removeCar(props.keyValue)}>
          X
        </form>
      </td>
    </tr>
  );
};

export default CarList;
