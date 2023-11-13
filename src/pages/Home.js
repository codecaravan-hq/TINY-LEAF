import React from "react";
import Hero from "./layout/Hero";
import img2 from "../pages/img/img-2.png";
import teapot from "../pages/img/teapot.png";
import flowers from "../pages/img/flowers.png";
import "../pages/Style/Home/Home.scss";
// import teaBook from "../pages/img/teaBook.png";
import { Link } from "react-router-dom";
import ImageSlider from "./layout/ImageSlider";
import { SliderData } from "./layout/SliderData";

function Home() {
  return (
    <div>
      <Hero />

      <div className="about">
        <article className="theLineAndtext">
          <section className="about-text">
            <section className="theFirstText">
              <h2>Our blends</h2>
              <p className="first-paragraph">
                We make our very own Tiny Leaf blends right here in
                <br /> the tea house, offering new flavours according to
                <br /> the season. We source all our produce sustainably
                <br /> and make sure the hands that laboured for our
                <br />
                flavoursome cups were rewarded fairly.
              </p>
            </section>

            <section className="theSectionosYline">
              <hr className="yelow-line" />
              <h2 className="text-subheading">
                Hand-picked <br /> and sustainable
              </h2>
            </section>
          </section>
          <section className="about-img">
            <img className="greenLeaf" src={img2} alt="" />
          </section>
        </article>
      </div>
      <section className="grid-containerHome">
        <div className="green-box"></div>
        <div className="text-box">
          <h3 className="WiseLeafEvening">Wise Leaf evening</h3>
          <p style={{ color: "black", padding: "1px" }}>
            Bringing together those with curious minds, speakers and observers
            alike, our Wise Leaf events are a melting pot to share, reflect and
            contemplate.
          </p>
        </div>
        <img className="teapot-image" src={teapot} alt="" />
        <img className="flowers-image" src={flowers} alt="" />
      </section>

      <section className="image-with-text-container">
        {/* <img className="tea-book-image" src={teaBook} alt="" /> */}
        <div className="text-overlay">
          <h4 className="reserv">
            Make a<br />
            reservation
          </h4>
          <p id="theSecondText-overlay">
            For anything from a catchup with a long lost friend to a book club
            gathering... we’re always ready to put the kettle on.
          </p>
          <Link className="grid-button" to="/Reservation">
            {" "}
            <button className="my-button my-button-padding">
              Reserve a table
            </button>{" "}
          </Link>
        </div>
      </section>

      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Home;
