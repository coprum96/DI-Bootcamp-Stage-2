import React, { Component } from 'react';
import Color from './Components/Color';
import Show from './Components/Show'

class BuggyCounter extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    if (this.state.counter === 5) {
      throw new Error('I crashed!');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }


  render() {
    return this.state.hasError ? (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      </div>
    ) : (
      this.props.children
    );
  }
}


function App() {
  return (
    <div>
      <p>
        <b>
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary>
        <p>
          These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of
          them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter />
      <hr/>
      <Color />
      <Show />
    </div>
  );
}

export default App;

