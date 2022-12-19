import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Header() {
  return (
    <div>
        <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservation">Reservation</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header
