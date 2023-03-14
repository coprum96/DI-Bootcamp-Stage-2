import React from 'react';
import { connect } from 'react-redux';
import {ageUp, ageDown} from './../actions/index'

class Age extends React.Component {
    handleAgeUp = () => {
        this.props.dispatch(ageUp(1));
      };
    
      handleAgeDown = () => {
        this.props.dispatch(ageDown(1));
      };

  render() {
    return (
      <>
        <div>Age</div>
        <p>{this.props.loading}</p>
        your age: <span>{this.props.age}</span>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Age);   