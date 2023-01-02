import React from 'react'
import logo from '../img/full-logo.png'
import { Outlet, Link } from "react-router-dom";
import '../Style/Header/Header.scss';



function Header() {
  return (
    <div className='header'>
        <img className='logo1' src={logo} alt='' srcSet=''/>
        <nav>
        <ul className='links'>
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
