import React from "react";
import img1 from "../../../images/Home/teapot.png";
import img2 from "../../../images/Home/flowers.png";

function WiseLeafEvenings() {
  return (
    <>
        <section className="wiseleaf-container">
          <div className="green-box"></div>
          <div className="wiseleaf-img1">
            <img className="teapot-img" src={img1} alt="teapot" />
          </div>

          <div className="wiseleaf-info">
            <h2>Wise Leaf evenings</h2>
            <p>
              Bringing together those with curious minds, speakers and observers
              alike, our Wise Leaf events are a melting pot to share, reflect
              and contemplate.
            </p>
          </div>

          <div className="wiseleaf-img2">
            <img className="flowers-img" src={img2} alt="flowers" />
          </div>
        </section>
    </>
  );
}

export default WiseLeafEvenings;
