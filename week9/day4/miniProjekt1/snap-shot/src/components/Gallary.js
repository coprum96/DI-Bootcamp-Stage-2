import React, { useState } from 'react';
import Photo from './Photo';

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  }

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} onClick={() => handleImageClick(image)}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
      {selectedImage && <Photo src={selectedImage.src} alt={selectedImage.alt} onClose={() => setSelectedImage(null)} />}
    </div>
  );
}

export default Gallery;
