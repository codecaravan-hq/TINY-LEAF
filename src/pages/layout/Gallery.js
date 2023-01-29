import gallery1 from "../img/gallery1.png"
import gallery2 from "../img/gallery2.png"
import gallery3 from "../img/gallery3.png"
import gallery4 from "../img/gallery4.png"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
  return (
    <Carousel>
      <div>
      <img className="gallery-img1" src={gallery1} alt="" />
      </div>
      <div>
      <img className="gallery-img1" src={gallery2} alt="" />
      </div>
      <div>
      <img className="gallery-img1" src={gallery3} alt="" />
      </div>
      <div>
      <img className="gallery-img1" src={gallery4} alt="" />
      </div>
    </Carousel>
  );
}

export default Gallery;


