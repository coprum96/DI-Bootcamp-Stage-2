import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      brand: 'Ferrari',
      model: 'Scandale',
      year: 2022,
    };
  }

  changeColor = () => {
    this.setState({ color: 'blue' });
  };

  changeRandomColor = () => {
    let { colors } = this.props;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: randomColor });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>It is {this.state.model}</p>
        <h2>In year {this.state.year}</h2>
        <p style={{ backgroundColor: this.state.color }}>Color: {this.state.color}</p>
        <button type='button' onClick={this.changeRandomColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default Car;
