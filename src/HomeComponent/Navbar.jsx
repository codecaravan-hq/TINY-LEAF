import React from "react";
import BergerIcon from "../images/hambergericon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <button className="hamburger">
          <img src={BergerIcon} alt="" />
        </button>
        <ul>
          <li><Link className="nav-links" to="/">Home</Link></li>
          <li><Link className="nav-links" to="/Menu">Menu</Link></li>
          <li><Link className="nav-links" to="/Reservations">Resevations</Link></li>
        </ul>
      </nav>
    </div>
  );
}
