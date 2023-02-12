import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import gallery1 from "../img/gallery1.png";
import gallery2 from "../img/gallery2.png";
import gallery3 from "../img/gallery3.png";
import gallery4 from "../img/gallery4.png";
import "../Style/Gallery/Gallery.scss";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <>
      <h5>Gallery</h5>
      <div className="button-container">
        <button className = "arrow-previous" onClick={handlePreviousClick}></button>
        <button className = "arrow-next" onClick={handleNextClick}></button>
      </div>
      <Carousel className="theGallery" selectedItem={currentIndex} onChange={setCurrentIndex}>
        <div>
          <img className="gallery-img1" src={gallery1} alt="" />
        </div>
        <div>
          <img className="gallery-img2" src={gallery2} alt="" />
        </div>
        <div>
          <img className="gallery-img3" src={gallery3} alt="" />
        </div>
        <div>
          <img className="gallery-img4" src={gallery4} alt="" />
        </div>
      </Carousel>
  
    </>
  );
};

export default Gallery;
