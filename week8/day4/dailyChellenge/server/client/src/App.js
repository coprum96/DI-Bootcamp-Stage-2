import React from 'react';

class App extends React.Component {
  state = {
    message: '',
    inputValue: ''
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/api/hello');
    const message = await response.text();
    this.setState({ message });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:3001/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: this.state.inputValue })
    });

    const result = await response.json();
    console.log(result); // just for testing

    this.setState({ inputValue: '', message: result.message });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type your message:
            <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;


