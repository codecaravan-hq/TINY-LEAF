import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar/Navbar.scss";
import logo from "../img/theLogo.png";
import Hamburger from "hamburger-react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  // Close the menu when the location (route) changes
  useEffect(() => {
    setToggleMenu(false);
  }, [location.pathname]);

  return (
    <div className="theNavbar">
      <img className="theLogo" src={logo} alt="" />

      <nav>
        <section className="TheLogAndBtn">
          <img className="theLogo" src={logo} alt="" />

          <Hamburger
            direction="right"
            toggled={toggleMenu}
            toggle={setToggleMenu}
          />
        </section>

        {toggleMenu && (
          <ul className="list">
            <li>
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Menu" onClick={() => setToggleMenu(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/Reservation" onClick={() => setToggleMenu(false)}>
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
