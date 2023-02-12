import React from 'react'
import ReservationHero from "../components/Reservations/ReservationHero";
import ReservationForm from "../components/Reservations/ReservationForm";
import MenuItems from "../components/Reservations/MenuItems";

function Reservation() {
  return (
    <>
      <ReservationHero />
      <ReservationForm />
      <MenuItems />
    </>
  );
}

export default Reservation