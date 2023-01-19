import React from "react";

export default function d() {
  return (
    <div  className="items-list">
      <div>
        <ul><li className="cormorant">Opening hours</li></ul>
        <ul className="roboto">
          <li>Mon - Sat 11am - 12pm</li>
          <li> Sun 11am - 11pm</li>
        </ul>
      </div>

      <div>
        <ul><li className="cormorant">Address</li></ul>
        <ul className="roboto">
          <li>24 Brew Lane</li>
          <li>BR3 WL Cuptown</li>
        </ul>
      </div>
      <div>
        <ul><li className="cormorant">Contact</li></ul>
        <ul className="roboto">
          <li>+44 201 998 7562</li>
          <li>hello@yellowmountain.com</li>
        </ul>
      </div>
    </div>
  );
}
