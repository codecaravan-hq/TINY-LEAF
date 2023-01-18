import React from 'react'
import LogoIcon from '../images/Ellipse.png';
import LogoText from '../images/Tinytext.png';



export default function Logo() {
  return (
    <div>
        <img src={LogoIcon} className='logoicon' alt="" />
        <img src={LogoText} className='logotext' alt="" />
    </div>
  )
}
