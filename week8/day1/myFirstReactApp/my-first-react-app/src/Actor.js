import React from 'react';

const Actor = (props) => {
  const { firstName, lastName, image } = props;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <img src={image} className={image} alt={`${firstName} ${lastName}`} />
    </div>
  );
}

export default Actor;