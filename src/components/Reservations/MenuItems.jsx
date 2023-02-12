import React from 'react';
import { Link } from "react-router-dom";
import Menu from "../../pages/Menu";


function MenuItems() {
  return (
    <div className="menu-items">
      <div className="caption">
        <h1 className="title">No storms in our tea cups</h1>
        <p className="text">
          We make our blends with love and care, so you can taste aromas from
          across the globe right here in our tea house
        </p>

        <Link to="/menu" element={<Menu />}>
          <button className="menu-btn">See what's on the menu</button>
        </Link>
      </div>
    </div>
  );
}

export default MenuItems