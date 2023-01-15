import React from "react";
import Hero from "./layout/Hero";
import img2 from "../pages/img/img-2.png";
// import Home from '../pages/Style/Home/Home.scss'

function Home() {
  return (
    <div>
      <Hero />

      <div className="about">
        <section className="about-text">
          <h2>Our blends</h2>
          <p className="about-text-paragraph">
            We make our very own Tiny Leaf blends right here in
            <br /> the tea house, offering new flavours according to
            <br /> the season. We source all our produce sustainably
            <br /> and make sure the hands that laboured for our
            <br />
            flavoursome cups were rewarded fairly.
          </p>
          <hr className="yelow-line" />
          <h2 className="about-text-subheading">
            Hand-picked <br /> and sustainable
          </h2>
        </section>
        <section className="about-img">
          <img className="theImg" src={img2} alt="" />
        </section>
      </div>
    </div>
  );
}

export default Home;
