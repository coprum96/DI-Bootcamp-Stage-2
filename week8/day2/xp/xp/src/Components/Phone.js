import React from 'react'

export class Phone extends React.Component {
    constructor(){
        super()
        this.state = {
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        };
    }
    changeColor = () => {
            this.setState({ color: 'blue' });
    }
  render() {
    return (
      <div className='phone'>
        <h1>My Phone is a {this.state.brand}</h1>
        <h2>it is a {this.state.color} {this.state.model} from {this.state.year}</h2>
        <button
          type="button"
          onClick={this.changeColor}
        > Change color</button>
      </div>
    )
  }
}

export default Phone;