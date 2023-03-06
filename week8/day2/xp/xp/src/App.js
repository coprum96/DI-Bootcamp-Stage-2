import React from 'react';
import Car from './Components/Car';
import Garage from './Components/Garage';
import Events from './Components/Events'
import './Components/Events.css'
import Phone from './Components/Phone';
import Color from './Components/Color';

//Part 1
const carInfo = { name: 'BMW', model: 'X5' };
function App() {
  return (
    <div>
      <Car carInfo={carInfo} />
      <Garage />
      <Events />
      <Phone />
      <Color />

    </div>
  );
}

export default App;
