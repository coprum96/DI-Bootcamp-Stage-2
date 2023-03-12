import React, { Component } from 'react';
import MovieList from './Components/MovieList'
import MovieDetails from './Components/MovieDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Redux Movies</h1>
        <div className="container">
          <MovieList />
          <MovieDetails />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
