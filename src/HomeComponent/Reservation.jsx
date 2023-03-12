import React from "react";
import "./Reservation.css";
import { Link } from "react-router-dom";

export default function Reservation() {
  return (
    <div className="home-reservation">
      <div className="content">
        <h1 className="title">Make a reservation</h1>
        <p className="subtitle">
          For anything from a catchup with a long lost friend to a book club
          gathering... we’re always ready to put the kettle on.
        </p>

        <Link to="/reservation" element={<Reservation/>}>
        <button className="table-reserve">Reserve a table </button>
        </Link>

      </div>
    </div>
  );
}
