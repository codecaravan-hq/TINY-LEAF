import React from "react";
import menu from "../pages/img/menu-pic.png";
import "../pages/Style/Menu/Menu.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <div className="menu-container">
        <img className="menuHero" src={menu} alt="Menu Pict" />
        <h1 className="menu-title">Menu</h1>
      </div>

      <div className="menuContainer">
        <h1 className="title">Loose leaf teas</h1>

        <h2 className="subtitle">Darjeeling</h2>
        <article className="thetext">
          <p className="ptag">
            A refined and ligh Black tea from the region the Tibetans call
            “country of storms” after the thick mist that rests on the
            plantations
          </p>
          <p className="price">£4.50</p>
        </article>

        <h2 className="subtitle">Blue Earl Grey</h2>
        <article className="thetext">
          <p className="ptag">
            A delicate blend of blueberry flower and sunflower petals with Earl
            Grey aromas
          </p>
          <p className="price">£4.50</p>
        </article>

        <h2 className="subtitle">Organic Mango and Papaya</h2>
        <article className="thetext">
          <p className="ptag">
            A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea,
            along with dried mango and papaya for a sweet exotic flavour
          </p>
          <p className="price">£5</p>
        </article>

        <h2 className="subtitle">White Magic</h2>
        <article className="thetext">
          <p className="ptag">
            White tea sprinkled with rose buttons and marigold, with aromas of
            passion fruit, peach and apricot
          </p>
          <p className="price">£5</p>
        </article>

        <h2 className="subtitle">Wise Flower</h2>
        <article className="thetext">
          <p className="ptag">
            An unusual blend of rose, Sencha Green tea, dates and gooseberry
            petals. Refreshing and seasonal.
          </p>
          <p className="price">£5</p>
        </article>

        <h2 className="subtitle">Night at the Palace</h2>
        <article className="thetext">
          <p className="ptag">
            Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make
            this one of our most exquisite blends
          </p>
          <p className="price">£5.50</p>
        </article>
      </div>
      <fieldset className="fieldset">
        <legend className="special">Special this week...</legend>

        <h2 className="subtitle">Sticky Almond</h2>
        <article className="thetext">
          <p className="ptag">
            Organic Sencha Green tea from China, mixed with apple, cinnamon,
            ginger and vanilla
          </p>
          <p className="price">£5.50</p>
        </article>
        <br />

        <h2 className="subtitle">Green Sun</h2>
        <article className="thetext">
          <p className="ptag">
            Blood orange and orange bark make this a fruity and delightfully
            sour tea
          </p>
          <p className="price">£5.50</p>
        </article>
        <br />

        <h2 className="subtitle">Christmas Special </h2>
        <article className="thetext">
          <p className="ptag">
            Organic Assam Black tea with cinnamon, caradamon and pineapple
          </p>
          <p className="price">£6</p>
        </article>
      </fieldset>

      <section className="menu-bottom-pic">
        <div className="text-overlay">
          <h4 className="menuBottomHtag">
            Shall we put your name in the tea pot?
          </h4>
          <p id="theSecondText-overlay">
            For anything from a catchup with a long lost friend to a book club
            gathering... we’re always ready to put the kettle on.
          </p>
          <Link className="grid-button" to="/Reservation">
            {" "}
            <button className="my-button my-button-padding">
              Reserve a table
            </button>{" "}
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Menu;
