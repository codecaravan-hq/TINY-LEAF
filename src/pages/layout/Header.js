import React from 'react'
import logo from '../img/theLogo.png'
import { Outlet, Link } from "react-router-dom";
import '../Style/Header/Header.scss';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


function Header() {
  return (
    <div className='header'>
        <img className='theLogo' src={logo} alt='' srcSet=''/>
        <nav>
        <ul className='links'>
          <li>
            <Link to="/">Home</Link>
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
      // <MenuRoundedIcon className="menuIcon" style={{fontSize:"xx-large"}}/>

