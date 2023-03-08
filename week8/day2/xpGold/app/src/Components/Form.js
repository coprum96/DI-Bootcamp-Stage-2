import React, { Component } from 'react';
import './Form.css';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: '',
      errormessage: '',
      textarea: '',
      cars: ['volvo', 'ford', 'fiat']
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangeAge = (event) => {
    const age = event.target.value;
    if (isNaN(age) || age === '') {
      this.setState({
        errormessage: 'Please enter a valid age'
      });
    } else {
      this.setState({
        age: age,
        errormessage: ''
      });
    }
  };

  handleChangeTextarea = (event) => {
    this.setState({
      textarea: event.target.value
    });
  };

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert('You are submitting: '+ this.state.username + ' - ' + this.state.age + ' years old');
  };

  handleChangeCars = (event) => {
    this.setState({
      cars: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.mySubmitHandler} className='form'>
          <h1>Hello {this.state.username}</h1>
          <label>
            Enter your Name:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Enter your age:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChangeAge}
            />
          </label>
          {this.state.errormessage !== '' && <p className="error">{this.state.errormessage}</p>}
          <button type="submit">Submit</button>
          <label>
            <textarea
              value={this.state.textarea}
              onChange={this.handleChangeTextarea}
            />
          </label>
          <label>
            Cars: 
            <select id="cars" value={this.state.cars} onChange={this.handleChangeCars}>
              {this.state.cars.map(car => <option key={car} value={car}>{car}</option>)}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Forms;

