import React, { useState } from "react";
import "../Style/Navbar/Navbar.scss";
import logo from "../img/theLogo.png";
import { Link } from "react-router-dom";
import "../Style/Header/Header.scss";
// import Home from '../Home';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="theNavbar">
      <img className="theLogo" src={logo} alt="" srcSet="" />

      <nav>
        <section className="TheLogAndBtn">
          <img className="theLogo" src={logo} alt="" srcSet="" />
          <button onClick={toggleNav} className="btn">
            btn
          </button>
        </section>
        {/*
        {toggleMenu && (
          <ul className="list">
            <li className="items">Home</li>
            <li className="items">Menu</li>
            <li className="items">Reservation</li>
          </ul>
        )}
        */}
        {toggleMenu && (
          <ul className="list">
            <li>
              <Link className="items" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="items" to="/Menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="items" to="/Reservation">
                Reservation
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
