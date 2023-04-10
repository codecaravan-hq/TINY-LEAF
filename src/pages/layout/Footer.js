import React from "react";
import "../Style/Footer/Footer.scss";
import logo from "../img/theLogo.png";

function Footer() {
  return (
    <div className="footer">
      <div class="grid-container">
      <img className="theLogo" src={logo} alt="logo" srcSet="" />

          <section className="grid-iteam2">
          <h6>Opening hours</h6>
        <p className="grid-item1">Mon - Sat 11am - 12pm Sun 11am - 11pm</p>
        </section>

        <section className="grid-iteam3">
        <h6>Address</h6>
        <p className="grid-item3">24 Brew Lane BR3 WL Cuptown</p>
        </section>

        <section className="grid-item4">
        <h6>Contact</h6>
        <p className="grid-item4">+44 201 998 7562 hello@yellowmountain.com</p>
        </section>
        <section>
        <p className="firstChild">Footer</p>
      </section>
      </div>

      
    </div>
  );
}

export default Footer;
