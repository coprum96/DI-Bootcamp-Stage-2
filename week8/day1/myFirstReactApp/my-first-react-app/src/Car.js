import React from "react";

const Car = (props) => {
  return (
    <div>
      {props.cars.map(car => (
        <ul>
          <li>{car.name}</li>
          <li>{car.year}</li>
          <li>{car.origin}</li>
        </ul>
      ))}
    </div>
  );
};

export default Car;
