import React from "react";
import logo from "../../images/Ellipse 4.svg";

import Hamburger from "./Hamburger";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Tiny Leaf Tea House</h2>
      </div>

      
      <Hamburger />
    </nav>
  );
}

export default Navbar;
