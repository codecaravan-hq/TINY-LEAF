import React from "react";
import "./WiseLeaf.css";
import Coffepot from "../images/Coffepot.png";
import Teacup from "../images/Teacup.png";

export default function WiseLeaf() {
  return (
    <section className="wiseleaf-container">
      <div className="green-box"></div>
      <div className="banner">
        <img src={Coffepot} className="coffePot-image" alt="" />
      </div>

      <div className="text-box">
        <h3>Wise Leaf evenings</h3>
        <p>
          Bringing together those with curious minds, speakers and observers
          alike, our Wise Leaf events are a melting pot to share, reflect and
          contemplate.
        </p>
      </div>

      <div className="teacup">
        <img src={Teacup} className="teacup-image" alt="" />
      </div>
    </section>
  );
}
