import React from "react";
import "./FormItem.css";

export default function FormSection() {
  return (
    <div className="create">
      <form>
        <div className="from-text">
        <h3>Book a table</h3>
        <p>We take bookings for groups up to 6. We get busy on weekends so do book early to avoid disappointment.</p>
        </div>
        <div className="box-label">
          <label>Date</label>
          <input type="Number" minlength="3" maxlength="8" required />

          <label>Time</label>
          <input type="Number" minlength="3" maxlength="8" required />

          <label>Group size</label>
          <input type="Number" minlength="3" maxlength="8" required />
        </div>

        <div className="box-label2">
          <label>Name</label>
          <input type="text" required />

          <label>Contact number</label>
          <input type="Number" minlength="3" maxlength="8" required />
        </div>

        <label for="description">Comments / requests</label>
        <textarea id="description"></textarea>

        <input id="agreement" type="checkbox" name="agreement" /><br />
        <label for="agreement">
          By requesting this booking, I am accepting Tiny Leaf’s Terms and
          Conditions.
        </label>
      </form>

      <button className="reserv-btn">Reservation</button>
    </div>
  );
}
