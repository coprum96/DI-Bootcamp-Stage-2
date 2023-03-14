import React from 'react';

const Photo = ({ src, alt, onClose }) => {
  return (
    <div className="photo-overlay" onClick={onClose}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Photo;
