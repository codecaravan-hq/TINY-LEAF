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
];

export default function TeaMenu() {
    return (
       <div className="teaMenu">
            <h2>Loose leaf teas</h2>
            {MenuItems.map( (item) => <TeaMenuItem title={item.title} description={item.description} price={item.price}/>)}




            <TeaMenuItem title="Darjeeling" description= " A refined and ligh Black tea from the region the Tibetans call country of storms after the thick mist that rests on the plantations" price= "£4.50"/>
            {/* <div className="group1">
                <h5 className="title-group">Darjeeling</h5>
                <div style={ {display:"flex"} }>
                <p className="description">
                   
                </p>
                <h4>£4.50</h4>
                </div>
            </div> */}

            {/* <div className="group2">
                <h5 className="title-group">Blue Earl Grey</h5>
                <p className="description">A delicate blend of blueberry flower and sunflower petals with Earl Grey aromas</p>
            </div> */}

            {/* <div className="group3">
                <h5 className="title-group">Organic Mango and Papaya</h5>
                <p className="description">A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea, along with dried mango and papaya for a sweet exotic flavour</p>
            </div> */}

            <div className="group4">
                <h5 className="title-group">White Magic</h5>
                <p className="description">White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot</p>
            </div>

            <div className="group5">
                <h5 className="title-group">Wise Flower</h5>
                <p className="description">An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal.</p>
            </div>

            <div className="group6">
                <h5 className="title-group">Night at the Palace</h5>
                <p className="description">Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends</p>
            </div>
        </div>
  );
}
