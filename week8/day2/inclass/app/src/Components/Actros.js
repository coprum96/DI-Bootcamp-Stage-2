import React from 'react';

class Actor extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: 'Brad',
      lastName: 'Pitt',
      image: 'https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_.jpg'
    };
  }

  render() {
    const { firstName, lastName, image } = this.state;
    const imageStyle = {
      width: '300px',
      height: '300px'
    };
    return (
      <div>
        <h1> My Favorite Actor is {firstName} {lastName}</h1>
        <p>Here is his Photo: </p>
        <img src={image} style={imageStyle} alt={`${firstName} ${lastName}`} />
      </div>
    );
  }
}

export default Actor;



