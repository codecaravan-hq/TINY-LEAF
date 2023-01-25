import React from "react";
import Image from "../images/BlendsImage.png";

export default function OurBlends() {
  return (
    <div className="ourblends">
      <div className="blends-heading-box">
        <h3 className='blends-heading-text'>Our blends</h3>
      </div>

      <div className="body-text-box">
        <h4 className="body-text">
          We make our very own Tiny Leaf blends right here in the tea house,
          offering new flavours according to the season. We source all our
          produce sustainably and make sure the hands that laboured for our
          flavoursome cups were rewarded fairly.
        </h4>
      </div>

      <div className="ourblends-image">
        <img src={Image} className='image-blends' alt="" />
      </div>

      <div className="text-feature-box">
        <div className="line"></div>
        <h4 className="text-hand-pick">Hand-picked and sustainable</h4>
      </div>

    </div>
  );
}
