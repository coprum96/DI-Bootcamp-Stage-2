import React from 'react';
import './Exercise4.css';

function Exercise4() {
  const headerStyle = {
    color: 'red',
    backgroundColor: 'lightblue'
  };

  const listItems = ['Coffee', 'Tea', 'Milk'];

  return (
    <div>
      <h1>This is Header</h1>
      <p>This is a paragraph.</p>
      <a href="https://www.google.com/">This is a link</a>
      <form> This is form 
        <label>
          Enter your Name:
          <input type="text" name="name" />
        </label>
        <br />
      </form>
      <img src="https://reactjs.org/logo-og.png" />
      <p>This is a lista</p>
      <ul>
        {listItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise4;
