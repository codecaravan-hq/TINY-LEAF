import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <div>
        <p className="gallery-text">Gallery</p>
      </div>
      <Carousel className="main-slide">
        <div>
          <img src={Img1} width='200px' height='250px' alt=""/>
        </div>
        <div>
          <img src={Img2} width='200px' height='250px' alt=""/>
        </div>
        <div>
          <img src={Img3} width='200px' height='250px' alt=""/>
        </div>
      </Carousel>
    </div>
  );
}
