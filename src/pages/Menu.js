import React from "react";
import menu from "../pages/img/menu-pic.png";
import "../pages/Style/Menu/Menu.scss";

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
    </div>
  );
}
export default Menu;
