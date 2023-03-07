import React from 'react';

class Planets extends React.Component {
    render() {
      const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
      const planetList = planets.map((planet) => <li className="list-group-item">{planet}</li>);
      return <ul className="list-group">{planetList}</ul>;
    }
  }
  
  export default Planets;




