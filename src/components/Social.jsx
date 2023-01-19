import React from 'react'
import Instagram from '../images/Instagram.png';
import Facebook from '../images/Facebook.png';

export default function Social() {
  return (
    <div className='social'>
        <img src={Instagram} className='instagram' alt="" />
        <img src={Facebook} alt="" />

    </div>
  )
}
