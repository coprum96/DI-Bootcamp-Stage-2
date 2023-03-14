import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction, incrementAsync, incrementIfOdd } from '../actions/index';
import store from './../store/reducer';

class Counter extends Component {
    incrementIfOdd = () => {
        if (this.props.counter % 2 !== 0) {
          this.props.dispatch({ type: 'INCREMENT' });
        }
      };
    
      incrementAsync = () => {
        setTimeout(() => {
          this.props.dispatch({ type: 'INCREMENT' });
        }, 1000);
      };

  render() {
    return (
      <div>
        Counter: {this.props.counter}
        <button onClick={() => this.props.dispatch(incrementAction)}>+</button>
        <button onClick={() => this.props.dispatch(decrementAction)}>-</button>
        <button onClick={this.incrementIfOdd}>Increment if odd</button>
        <button onClick={this.incrementAsync}>Increment async</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(Counter);
