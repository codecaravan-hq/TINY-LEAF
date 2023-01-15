import React from "react";
import Hero from "./layout/Hero";
import img2 from "../pages/img/img-2.png";
import teapot from "../pages/img/teapot.png";
import flowers from "../pages/img/flowers.png";

import "../pages/Style/Home/Home.scss";

function Home() {
  return (
    <div>
      <Hero />

      <div className="about">
        <section className="about-text">
          <h2>Our blends</h2>
          <p className="first-paragraph">
            We make our very own Tiny Leaf blends right here in
            <br /> the tea house, offering new flavours according to
            <br /> the season. We source all our produce sustainably
            <br /> and make sure the hands that laboured for our
            <br />
            flavoursome cups were rewarded fairly.
          </p>
          <hr className="yelow-line" />
          <h2 className="text-subheading">
            Hand-picked <br /> and sustainable
          </h2>
        </section>
        <section className="about-img">
          <img className="theImg" src={img2} alt="" />
        </section>
      </div>
      <section className="grid-container">
        <div className="green-box"></div>
        <div className="text-box">
          <h3>Wise Leaf evening</h3>
          <p>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
        <img className="teapot-image" src={teapot} alt="" />
        <img className="flowers-image" src={flowers} alt="" />
      </section>
    </div>
  );
}

export default Home;
