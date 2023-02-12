import React from 'react'
import Gallery from "../components/Home/Gallery/Gallery";
import HomeHero from "../components/Home/Hero/HomeHero";
import HomeReservation from "../components/Home/Reservation/HomeReservation";
import Ourblends from "../components/Home/About/Ourblends";
import WiseLeafEvenings from "../components/Home/About/WiseLeafEvenings";

function Home() {
  return (
    <>
      <HomeHero />
      <Ourblends />
      <WiseLeafEvenings />
      <HomeReservation />
      <Gallery />
    </>
  )
}

export default Home