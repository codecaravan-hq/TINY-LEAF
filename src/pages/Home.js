import React from 'react'
import content from '../pages/img/content.png'
import Home from '../pages/Style/Home/Home.scss'


function home() {
  return (
    <div>
     <h2 className="cetntalText" element={Home}>A flavour for all <br />seasons</h2>
     <img className='content' src={content} alt='' srcSet=''/>
    </div>
  )
}

export default home
