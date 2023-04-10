import React from 'react'
import menu from "../pages/img/menu-pic.png";
import "../pages/Style/Menu/Menu.scss";
function Menu() {
  return (
    <div>
      <div>
        <img className="menuHero" src={menu} alt="" />
      </div>
      <h1>Menu</h1>
      <div className="menuContainer">
        <h1 className="title">Loose leaf teas</h1>
        
      
        <h2 className="subtitle">Darjeeling</h2>
        <article className='thetext'>
        <p className="ptag">A refined and ligh Black tea from the region the Tibetans call “country of storms” after the thick mist that rests on the plantations</p>
        <p className="price">£4.50</p>
        </article>

        <p className="ptag">Description 1</p>
        
        <p className="price">Price 1</p>
        <h2 className="subtitle">Subtitle 2</h2>
        <p className="ptag">Description 2</p>
        <p className="price">Price 2</p>
        <h2 className="subtitle">Subtitle 3</h2>
        <p className="ptag">Description 3</p>
        <p className="price">Price 3</p>
        <h2 className="subtitle">Subtitle 4</h2>
        <p className="ptag">Description 4</p>
        <p className="price">Price 4</p>
        <h2 className="subtitle">Subtitle 5</h2>
        <p className="ptag">Description 5</p>
        <p className="price">Price 5</p>
        <h2 className="subtitle">Subtitle 6</h2>
        <p className="ptag">Description 6</p>
        <p className="price">Price 6</p>
      </div>
    </div>
  )
}
export default Menu