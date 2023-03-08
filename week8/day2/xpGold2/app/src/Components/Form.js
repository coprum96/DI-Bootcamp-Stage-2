import React, { Component } from 'react';
import './Form.css';

export class Form extends Component {
  constructor(props) { // props should be passed to constructor
    super(props); // super should take props as argument
    this.state = {
      title: '',
      author: '', // should be lowercase to match the input name
      genre: '', // should be lowercase to match the input name
      year: '', // should be a string, not a syntax error
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target; // get the input name and value
    this.setState({ [name]: value }); // update the state using computed property names
  };

  handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission
    console.log(this.state); // log the form data
  };

  render() {
    const { title, author, genre, year } = this.state; // get the form data from state
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}> {/* use onSubmit instead of onChange */}
          <h1>New Book</h1>
          <label>
            Title
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={author} onChange={this.handleChange} />
          </label>
          <label>
            Genre
            <input type="text" name="genre" value={genre} onChange={this.handleChange} />
          </label>
          <label>
            Year Published
            <input type="text" name="year" value={year} onChange={this.handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
