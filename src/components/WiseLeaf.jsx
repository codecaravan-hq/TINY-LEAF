import React from 'react'
import Coffepot from '../images/Coffepot.png';
import Teacup from '../images/Teacup.png';

export default function WiseLeaf() {
  return (
    <div className='wise-leaf'>
      <img src= {Coffepot} className='coffepot-image' alt="" />

      <div className='tex-box'>

        <div className='wiseleaf-header'>
          <h3>Wise Leaf evenings</h3>
        </div>

        <p>Bringing together those with
          curious minds, speakers and
          observers alike, our Wise Leaf 
          events are a melting pot to 
          share, reflect and contemplate.</p>
      </div>

      <div className='teacup'>
        <img src= {Teacup} className='teacup-image' alt="" />
      </div>
    </div>
  )
}
