import { useState } from "react";
import reservations from "../pages/img/reserv.png";
import leftIconReservation from "../pages/img/leftIcon-reservation.png";
import rightIconReservation from "../pages/img/righticon-reservation.png";
import { Link } from "react-router-dom";

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
    // Add your form submission logic here
  };

  // Generate time options
  const generateTimeOptions = () => {
    const hours = [...Array(24).keys()]; // 0 to 23
    const minutes = ["00", "15", "30", "45"];

    const timeOptions = [];
    hours.forEach((hour) => {
      minutes.forEach((minute) => {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute}`;
        timeOptions.push(formattedTime);
      });
    });

    return timeOptions;
  };

  const timeOptions = generateTimeOptions();

  return (
    <>
      <section className="menu-container">
        <img className="menuHero" src={reservations} alt="Reserv Pict" />
        <h1 className="menu-title">Reservations</h1>
      </section>
      <article className="allInOne">
        <section className="leftIcon">
          <img
            className="theLeftIcon"
            src={leftIconReservation}
            alt="left icon "
          />
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
              <div className="theLabels">
                <label>
                  Date
                  <br />
                  <input
                    className="dateTimeGroupSize"
                    type="date" // Use type="date" for a date input
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </label>
              </div>
              <div className="theLabels">
                <label>
                  Time
                  <br />
                  <select
                    className="dateTimeGroupSize"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                  >
                    <option value=""></option>
                    {timeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="theLabels">
                <label>
                  Group Size
                  <br />
                  <select
                    className="dateTimeGroupSize"
                    value={groupSize}
                    onChange={(event) => setGroupSize(event.target.value)}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </label>
              </div>
            </article>
            <article className="nameContactNumber">
              <div className="theLabels">
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
              <div className="theLabels">
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
            <div className="theLabels">
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

        <section className="rightIcon">
          <img
            className="theRightIcon"
            src={rightIconReservation}
            alt="right icon "
          />
        </section>
      </article>
      <section className="reserv-bottom-pic">
        <div className="reserv-text-overlay">
          <h4 className="reservBottomHtag">No storms in our tea cups</h4>
          <p id="reservTheSecondText-overlay">
            We make our blends with love and care, so you can taste aromas from
            across the globe right here in our tea house
          </p>
          <Link to="/Reservation">
            {" "}
            <button className="my-button " id="my-button-reserv">
              See what’s on the menu
            </button>{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Reservation;
