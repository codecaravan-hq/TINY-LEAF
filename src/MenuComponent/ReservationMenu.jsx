import React from 'react'
import './ReservationMenu.css';

export default function reservation() {
  return (
    <div className='reservation-menu'>
      <div className='content-menu-text'>
        <h1 className='title-content'>Shall we put your name in the tea pot?</h1>
        <p className='subtitle-menu'>For anything from a catchup with a long 
          lost friend to a book club gathering...
           we’re always ready to put the kettle on.</p>
           <div className='menu-button-reservation'>
            <button className='menu-button'>Reservation</button>
           </div>

      </div>
    </div>
  )
}
