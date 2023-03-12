import React from "react";
import "./Special.css";
import SpecialMenueItems from "./SpecialMenueItems";

const SpecialItems = [
  {
    title: "Sticky Almond",
    description:
      "Organic Sencha Green tea from China, mixed with apple, cinnamon, ginger and vanilla",
    price: "£5.50",
  },
  {
    title: "Green Sun",
    description:
      "Blood orange and orange bark make this a fruity and delightfully sour tea",
    price: "£5.50",
  },
  {
    title: "Christmas Special ",
    description:
      "Organic Assam Black tea with cinnamon, caradamon and pineapple ",
    price: "£6",
  },
];

export default function SpecialMenue() {
  return (
    <div className="specialmenue">
      <fieldset>
        <legend className="heading">Special this week...</legend>
        {SpecialItems.map((item) => (
          <SpecialMenueItems
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </fieldset>
    </div>
  );
}
