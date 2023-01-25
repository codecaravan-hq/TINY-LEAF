import './Footer.css';
import React from 'react'
import LogoFooter from './LogoFooter';
import Items from './Items';
import Social from './Social';

export default function Footer() {
  return (
    <div className='footer'>
      <LogoFooter/>
      <Items/>
      <Social/>
      <p className='copyright'>© 2025</p>
    </div>
  )
}
