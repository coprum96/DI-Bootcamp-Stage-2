import React from 'react';
import { connect } from 'react-redux';
import { changePropTwo } from '../redux/actions';

const Child = (props) => {
  return (
    <>
      <h2>Child Component</h2>
      <div>{props.prop_one}</div>
      <div>{props.b}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    b: state.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePropB: (e) => dispatch(changePropTwo(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);

