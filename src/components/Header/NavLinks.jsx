import React from "react";
import { NavLink } from "react-router-dom";

export function NavLinks({open}) {
  
  return (
    <ul className={"nav-elements" + (open ? " open" : "")}>
      <li>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/menu">
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/reservation">
          Reservation
        </NavLink>
      </li>
    </ul>
  );
}
