import React from 'react'
import Hero from './Hero';
import TeaMenu from './TeaMenu';
import SpecialMenu from './SpecialMenue';
import ReservationMenue from './ReservationMenu';

export default function Main() {
  return (
    <div>
      <Hero/>
      <TeaMenu/>
      <SpecialMenu/>
      <ReservationMenue/>
    </div>
  )
}
