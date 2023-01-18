import React from 'react'
import Ellipse from '../images/Ellipse.png';
import Text from '../images/Tinytext.png';

export default function LogoFooter() {
  return (
    <div className='logofooter'>
        <img src={Ellipse} className='logo-footer' alt="" />
        <img src= {Text} className='logo-text-footer' alt="" />
    </div>
  )
}
