import React from 'react';
import Car from './Components/Car';
import Garage from './Components/Garage';

//Part 1
const carInfo = { name: 'BMW', model: 'X5' };
function App() {
  return (
    <div>
      <Car carInfo={carInfo} />
      <Garage />
    </div>
  );
}

export default App;
