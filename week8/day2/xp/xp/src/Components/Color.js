import React from 'react'

export class Color extends React.Component {
    constructor(){
        super()
        this.state = {
            favoriteColor: "red",

        };
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({ favoriteColor: 'yellow' });
        }, 5000);
      }
      
    changeColor = () => {
        this.setState({ favoriteColor: 'blue' });
      };

  render() {
    return (
      <div>
        <h2>My Favorite Color is {this.state.favoriteColor}</h2>
        <button type='button' onClick={this.changeColor}>
          Change color
        </button>
      </div>
    )
  }
}

export default Color;