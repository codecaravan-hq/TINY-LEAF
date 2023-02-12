import React from 'react';
import images from "./images";
import ImageSlider from "./ImageSlider";
// import img1 from './images/Img 1.png'

function Gallery() {
  return (
    <div className='gallery-container'>
      <h2>Gallery</h2>
      <ImageSlider images={images}/>
    </div>
  );
}

export default Gallery;