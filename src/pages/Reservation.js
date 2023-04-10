import React from 'react'
// import React { useState } from "react";
import '../pages/Style/Reservation/Reservation.scss';


const Reservation = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [groupSize, setGroupSize] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [comment, setComment] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div>
        <label>
          Date:
          <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
        </label>
        <label>
          Time:
          <input type="text" value={time} onChange={(event) => setTime(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Group Size:
          <input type="text" value={groupSize} onChange={(event) => setGroupSize(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Contact Number:
          <input type="text" value={contactNumber} onChange={(event) => setContactNumber(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Comment/Request:
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} />
        </label>
      </div>
      <div>
        <input type="checkbox" checked={acceptTerms} onChange={(event) => setAcceptTerms(event.target.checked)} />
        By requesting this booking, I am accepting Tiny Leaf's Terms and Conditions.
      </div>
      <button type="submit">Reserve</button>
    </form>
  );
};

export default Reservation;
