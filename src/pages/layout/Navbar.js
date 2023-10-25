import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar/Navbar.scss";
import logo from "../img/theLogo.png";
import "../Style/Header/Header.scss";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="theNavbar">
      <img className="theLogo" src={logo} alt="" />

      <nav>
        <section className="TheLogAndBtn">
          <img className="theLogo" src={logo} alt="" />
          <button onClick={toggleNav} className="btn">
            btn
          </button>
        </section>

        {toggleMenu && (
          <ul className="list">
            <li>
              <Link className="items" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="items" to="/Menu" onClick={closeMenu}>
                Menu
              </Link>
            </li>
            <li>
              <Link className="items" to="/Reservation" onClick={closeMenu}>
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
