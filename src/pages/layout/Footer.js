import React from "react";
import "../Style/Footer/Footer.scss";
import logo from "../img/theLogo.png";
import iconFooter from "../img/iconFooter.png";

function Footer() {
  return (
    <div className="footer">
      <div class="grid-containerFooter">
        <section className="logoFooter">
          <img className="theLogo" src={logo} alt="logo" srcSet="" />
          <p className="theLogoText">© 2025</p>
        </section>

        <section className="grid-iteam2">
          <h6>Opening hours</h6>
          <p className="grid-item1">Mon - Sat 11am - 12pm Sun 11am - 11pm</p>
        </section>

        <section className="grid-iteam3">
          <h6>Address</h6>
          <p className="grid-item3">24 Brew Lane BR3 WL Cuptown</p>
        </section>

        <section className="grid-iteam4">
          <h6>Contact</h6>
          <p className="grid-iteam4">
            +44 201 998 7562 hello@yellowmountain.com
          </p>
        </section>
        <section>
          <img
            className="firstChild"
            src={iconFooter}
            alt="iconFooter"
            srcSet=""
          />
        </section>
      </div>
    </div>
  );
}

export default Footer;
