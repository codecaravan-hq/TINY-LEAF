import { useState } from "react";
import reservations from "../pages/img/reserv.png";
import "../pages/Style/Reservation/Reservation.scss";

const Reservation = () => {
  const [title] = useState("");
  const [subtitle] = useState("");
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
    <>
      <section className="menu-container">
        <img className="menuHero" src={reservations} alt="Reserv Pict" />
        <h1 className="menu-title">Reservations</h1>
      </section>
      <div className="container-reservat">
        <section className="top-text">
          <h2 className="reserv-sub">Reserve a table</h2>
          <article className="thetext">
            <p className="ptag-reserv">
              We take bookings for groups up to 6. We get busy on weekends so
              best to book early to avoid disappointment!
            </p>
          </article>
        </section>

        <form onSubmit={handleSubmit}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <article className="dateTimeGroup">
            <div>
              <label>
                Date
                <br />
                <input
                  className="dateTimeGroupSize"
                  type="text"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Time
                <br />
                <input
                  className="dateTimeGroupSize"
                  type="text"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Group Size
                <br />
                <input
                  className="dateTimeGroupSize"
                  type="text"
                  value={groupSize}
                  onChange={(event) => setGroupSize(event.target.value)}
                />
              </label>
            </div>
          </article>
          <article className="nameContactNumber">
            <div>
              <label>
                Name
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  id="name"
                />
              </label>
            </div>
            <div>
              <label>
                Contact Number
                <br />
                <input
                  type="text"
                  value={contactNumber}
                  onChange={(event) => setContactNumber(event.target.value)}
                  id="contact"
                />
              </label>
            </div>
          </article>
          <div>
            <label>
              Comment / Request
              <br />
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                id="commentRequest"
              />
            </label>
          </div>
          <div className="conditions">
            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={(event) => setAcceptTerms(event.target.checked)}
              id="checkbox"
            />
            <p className="agreement">
              By requesting this booking, I am accepting Tiny Leaf's Terms and
              Conditions.
            </p>
          </div>
          <button type="submit">Reserve</button>
        </form>
      </div>
    </>
  );
};

export default Reservation;
