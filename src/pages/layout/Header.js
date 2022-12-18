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
            <Link to="/Menu">Blogs</Link>
          </li>
          <li>
            <Link to="/Article">Article</Link>
          </li>
          <li>
            <Link to="/Reservation">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Header
