import React from 'react';
import Child from './Components/Child';
import Child2 from './Components/Child2';
import { connect } from 'react-redux';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      property_one: 'text one',
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>hello</h1>
          <input type='text'></input>
          <div>{this.state.property_one}</div>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <Child prop_one={this.state.property_one} />
          <Child2 hello={this.state.property_two} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: state.property_one
  }
}

export default connect(mapStateToProps)(App);

