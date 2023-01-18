import React from 'react'
import BergerIcon from '../images/hambergericon.png';

export default function Navbar() {
  return (
        <nav> 
            <button className="hamburger">
                <img src={BergerIcon} alt="" />
            </button> 
            <ul className="nav-ul">
                <li>HOME</li>
                <li>Menu</li>
                <li>Resevations</li>
            </ul>
        </nav>
  )
}
