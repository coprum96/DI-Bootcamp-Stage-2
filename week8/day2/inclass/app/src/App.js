import Car from './Components/Car'
import Actor from './Components/Actros'
import Sunrise from './Components/Sunrise';


function App() {
  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ];


  return (
    <div>
      {/* <Car colors={carColors}/> */}
      {/* <Actor /> */}
      <Sunrise />
    </div>
  );
}

export default App;
