import React from "react";
import "./TeaMenu.css";
import TeaMenuItem from "./TeaMenuItem";

const MenuItems = [
    {
    title:"Darjeeling",
    description:" A refined and ligh Black tea from the region the Tibetans call country of storms after the thick mist that rests on the plantations",
    price:"£4.50",
    },
    {
        title:"Blue Earl Grey",
        description:"A delicate blend of blueberry flower and sunflower petals with Earl Grey aromas",
        price:"£6.50",
    },
    {
        title:"Organic Mango and Papaya",
        description:"A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea, along with dried mango and papaya for a sweet exotic flavour",
        price:"£5",
    },
    {
        title:"White Magic",
        description:"White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot",
        price:"£5",
    },
    {
        title:"Wise Flower",
        description:"An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.",
        price:"£5",
    },
    {
        title:"Night at the Palace",
        description:"Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends",
        price:"£5.50",
    },
];

export default function TeaMenu() {
    return (
       <div className="teaMenu">
            <h2>Loose leaf teas</h2>
            {MenuItems.map( (item) => <TeaMenuItem title={item.title} description={item.description} price={item.price}/>)}
        </div>
  );
}
