import React from "react";
import { Link } from "react-router-dom";
import Reservation from '../../../pages/Reservation'

function HomeReservation() {
  return (
    <div className="home-reservation">
      <div className="caption">
        <h1 className="title">Make a reservation</h1>
        <p className="text">
          For anything from a catchup with a long lost friend to a book club
          gathering... we're always ready to put the kettle on.
        </p>

        <Link to="/reservation" element={<Reservation />}>
          <button className="reservation-btn">Reserve a table</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeReservation