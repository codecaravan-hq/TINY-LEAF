import React, { useState } from "react";
import logo from "../../images/Reservations/Ellipse 4.png";
import logo2 from "../../images/Reservations/Logo.png";

function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState();
  const [textarea, setTextarea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main-div">
        <div className="img1-div">
          <img className="logo-img" src={logo} alt="logo" />
        </div>

        <div className="form-div">
          <div className="form-title">
            <h2> Book a table </h2>
            <p>
              We take bookings for groups up to 6. We get busy on weekends so
              best to book early to avoid disappointment!
            </p>
          </div>

          <div className="form">
            <form onSubmit={handleSubmit} className="form-container">
              <label className="label1">Date</label>
              <input
                className="input1"
                type="date"
                value={date}
                min="2023-01-01"
                max="2023-12-31"
                onChange={(e) => setDate(e.target.value)}
              />

              <label className="label2">Time</label>
              <input
                className="input2"
                type="time"
                value={time}
                min="17:00"
                max="23:00"
                required
                onChange={(e) => setTime(e.target.value)}
              />

              <label className="label3">Group size</label>
              <input
                className="input3"
                type="number"
                value={groupSize}
                onChange={(e) => setGroupSize(e.target.value)}
              />

              <label className="label4">Name</label>
              <input
                className="input4"
                type="text"
                value={name}
                required
                minlength="4"
                maxlength="20"
                size="20"
                onChange={(e) => setName(e.target.value)}
              />

              <label className="label5">Contact number</label>
              <input
                className="input5"
                type="tel"
                value={contact}
                placeholder="123-45-6789"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                onChange={(e) => setContact(e.target.value)}
              />

              <label className="label6">Comments/requests</label>
              <textarea
                className="textarea"
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
              />
            </form>
          </div>

          <div className="checkbox">
            <div className="box">
              <input type="checkbox" value="tandc" />
              <label>
                By requesting this booking, I am accepting Tiny Leaf's Terms and
                Conditions.
              </label>
            </div>
            <div className="reserve">
               <button className="btn-reserve">Reserve</button>
            </div>
          </div>
        </div>

        <div className="img2-div">
          <img className="logo-img2" src={logo2} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default ReservationForm;
