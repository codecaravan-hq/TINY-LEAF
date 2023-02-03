import React from "react";
import BergerIcon from "../images/hambergericon.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <button className="hamburger">
          <img src={BergerIcon} alt="" />
        </button>
        <ul className="nav-ul">
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/Reservations">Resevations</Link>
        </ul>
      </nav>
    </div>
  );
}
