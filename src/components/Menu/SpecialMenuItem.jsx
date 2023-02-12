import React from 'react'

function SpecialMenuItem({name, info, price}) {
  return (
    <>
       <div className='special-menu'>{name}</div>
       <div className='special-menu-info'>{info}</div>
       <div className='special-menu-price'>£{price}</div>
    </>
  )
}

export default SpecialMenuItem