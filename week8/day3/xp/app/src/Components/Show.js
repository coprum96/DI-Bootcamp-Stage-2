import React, { Component } from "react";

function deleteHeader() {
  alert("The component named Header is about to be unmounted.");
}

class Child extends Component {
  componentWillUnmount() {
    alert("Child component is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  state = {
    show: true
  };

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    const { show } = this.state;
    return (
      <div>
        {show && <Child />}
        <button onClick={this.handleDelete}>Delete Header</button>
      </div>
    );
  }
}

export default App;
