import React, { Component } from 'react'
import { INCREMENT_ACTION, DECREMENT_ACTION } from '../actions'
import { store } from '../reducers/counter'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    store.dispatch(INCREMENT_ACTION)
  }

  decrement() {
    store.dispatch(DECREMENT_ACTION)
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <>
        <div>
          <h1> Counter </h1>
          <button onClick={this.increment}>+</button>
          <h1>{this.state.count}</h1>
        </div>
        <button onClick={this.decrement}>-</button>
      </>
    )
  }
}
