import React from 'react';
// import './Car.css';
import SearchCar from './Components/SearchCar';
// call the Car component
import Car from './Components/Car';

const listCars = [
  {
    id: 1,
    brand: "ford",
    name: "ford torino",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 2,
    brand: "ford",
    name: "ford galaxie 500",
    year: "1970-01-01",
    origin: "USA"
  },
  {
    id: 3,
    brand: "chevrolet",
    name: "chevrolet vega 2300",
    year: "1971-01-01",
    origin: "USA"
  },
  {
    id: 4,
    brand: "peugeot",
    name: "peugeot 504 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
  {
    id: 5,
    brand: "renault",
    name: "renault 12 (sw)",
    year: "1972-01-01",
    origin: "Europe"
  },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // we added a new attribute to the state
      // it will hold the relevant objects 
      chosenCars: [],
      nameChosenCar: ""
    };
  }

  handleChange = event => {
    // we filter the listCars to fetch only those with the brand equal to event.target.value (ie. value of the option chosen by the user)
    const searchedCars = listCars.filter((car) =>
      car.brand.includes(event.target.value))
    this.setState(
      {
        nameChosenCar: event.target.value,
        //set the value of the attribute chosenCars
        chosenCars: searchedCars
      }
    )
  }

  render() {
    return (
      <div className="box" >
        <SearchCar listCars={listCars} handleChange={this.handleChange} />
          {/* We call the Car component */}
        <Car nameChosenCar={this.state.nameChosenCar} chosenCar={this.state.chosenCars}/>
      </div>
    )
  }
}

export default App;