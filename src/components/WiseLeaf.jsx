import React from "react";
import './WiseLeaf.css';
import Coffepot from "../images/Coffepot.png";
import Teacup from "../images/Teacup.png";

export default function WiseLeaf() {
  return (
    <div className="wise-leaf">
      <div className="banner">
        <img src={Coffepot} className='coffePot-image' alt="" />
      </div>

      <div className="tex-box">
        <div className="wiseleafBox">
          <h3 className="wiseleaf-header">Wise Leaf evenings</h3>
        </div>
        <div className="wiseLeaf-paragraph">
          <p className="paragraph">
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
      </div>

      <div className="teacup">
        <img src={Teacup} className="teacup-image" alt="" />
      </div>
    </div>
  );
}
