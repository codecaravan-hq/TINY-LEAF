import React from "react";
import Image from "../images/BlendsImage.png";
import ImageFeature from '../images/Textfeature.png';

export default function OurBlends() {
  return (
    <div className="ourblends">
      <div className="blends-heading">
        <h3>Our blends</h3>
      </div>

      <div className="body-text">
        <h4>
          We make our very own Tiny Leaf blends right here in the tea house,
          offering new flavours according to the season. We source all our
          produce sustainably and make sure the hands that laboured for our
          flavoursome cups were rewarded fairly.
        </h4>
      </div>

      <div className="ourblends-image">
        <img src={Image} alt="" />
      </div>

      <div className="text-feature">
        <img src={ImageFeature} alt="" />
      </div>

    </div>
  );
}
