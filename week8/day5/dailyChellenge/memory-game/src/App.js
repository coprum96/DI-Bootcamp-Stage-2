import React, { Component } from 'react';
import CharacterCard from './Components/CharacterCard';
import Wrapper from './Components/Wrapper';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import characters from './Components/data.json';

class App extends Component {
  state = {
    characters,
    highScore: 0,
    currentScore: 0,
    Clicked: false,
  };

  handleClick = (id) => {
    this.handleScore(id);
    this.shuffleArray();
  };

  handleScore = (id) => {
    this.setState((prevState) => {
      const characters = prevState.characters.map((character) => {
        if (character.id === id && character.clicked === false) {
          return {
            ...character,
            clicked: true,
          };
        } else if (character.id === id && character.clicked === true) {
          return {
            ...character,
            clicked: false,
          };
        }
        return character;
      });

      const Clicked = characters.some((character) => character.clicked === true);

      if (Clicked) {
        return {
          characters,
          currentScore: 0,
          Clicked: true,
          highScore: Math.max(prevState.highScore, prevState.currentScore),
        };
      } else {
        return {
          characters,
          currentScore: prevState.currentScore + 1,
          Clicked: false,
          highScore: Math.max(prevState.highScore, prevState.currentScore + 1),
        };
      }
    });
  };

  shuffleArray = () => {
    const shuffledArr = this.shuffle(this.state.characters);
    this.setState({ characters: shuffledArr });
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      currentScore: prevState.currentScore + 1,
    }));
  };

  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <h1>Hello</h1>
        <Jumbotron />
        {this.state.characters.map(character => (
          <CharacterCard
            Clicked={this.state.Clicked}
            handleClick={this.handleClick}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            occupation={character.occupation}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


