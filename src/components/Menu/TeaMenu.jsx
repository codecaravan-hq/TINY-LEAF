import React from 'react'
import TeaMenuItem from './TeaMenuItem';


function TeaMenu() {
  
const items = [{name:"Darjeeling",
info:"A refined and ligh Black tea from the region the Tibetans call “country of storms” after the thick mist that rests on the plantations",
price:"4.50"},
{name:"Blue Earl Grey",
info:"A delicate blend of blueberry flower and sunflower petals with Earl Grey aromas",
price:"4.50"},
{name:"Organic Mango and Papaya",
info:"A mix of Indian Black tea, Ceylan, Assam and Chinese Green tea, along with dried mango and papaya for a sweet exotic flavour",
price:"5"},
{name:"White Magic",
info:"White tea sprinkled with rose buttons and marigold, with aromas of passion fruit, peach and apricot",
price:"5"},
{name:"Wise Flower",
info:"An unusual blend of rose, Sencha Green tea, dates and gooseberry petals. Refreshing and seasonal",
price:"4.50"},
{name:"Night at the Palace",
info:"Earl Grey aromas, kiwi, yellow peach, orange blossom and violet make this one of our most exquisite blends",
price:"5.50"}
];

  return (
    <div className="tea-menu-container">
      <h2 className="tea-menu-header">Loose leaf teas</h2>
      {items.map((item) => (
          <TeaMenuItem name={item.name} info={item.info} price={item.price} />
      ))}
    </div>
  );
}

export default TeaMenu