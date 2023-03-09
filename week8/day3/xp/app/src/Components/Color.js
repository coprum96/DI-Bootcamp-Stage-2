import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red"
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleClick = () => {
    this.setState({ favoriteColor: "blue" });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
    const message = `My Favorite color is ${this.state.favoriteColor}`;
      const div = document.getElementById("message");
      div.innerHTML = snapshot;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      const message = `My Favorite color is ${this.state.favoriteColor}`;
      return message;
    }
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.handleClick}>Change Color</button>
        <div id="message"></div>
      </div>
    );
  }
}

export default Color;

