import React from "react";
import './Gallery.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <h2 className="gallery-text">Gallery</h2>
      <Carousel className="main-slide">
        <div>
          <img src={Img1} width="" height="" alt="" />
        </div>
        <div>
          <img src={Img2} width="" height="" alt="" />
        </div>
        <div>
          <img src={Img3} width="" height="" alt="" />
        </div>
      </Carousel>
    </div>
  );
}
