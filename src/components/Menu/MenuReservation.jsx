import React from "react";
import Reservation from "../../pages/Reservation";
import { Link } from "react-router-dom";


function MenuReservation() {
  return (
    <div className="menu-reservation">
      <div className="caption">
        <h1 className="title">Shall we put your name in the tea pot?</h1>
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

export default MenuReservation;
