import React from 'react'
import Hero from './Hero';
import About from './About';
import Reservation from './Reservation';
import Gallery from './Gallery';

export default function Body() {
  return (
    <div>
      <Hero/>
      <About/>
      <Reservation/>
      <Gallery/>
    </div>
  )
}
