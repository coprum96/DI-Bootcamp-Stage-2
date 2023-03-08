import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }

  async componentDidMount() {
    const url = 'http://localhost:3000/api/hello';
    try {
      const response = await fetch(url);
      const data = await response.text();
      this.setState({ message: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        {message ? <h1>{message}</h1> : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;

