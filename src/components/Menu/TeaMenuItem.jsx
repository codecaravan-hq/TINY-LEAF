import React from 'react'

function TeaMenuItem({name, info, price}){
   return (
    <>
        <div className='tea-menu'>{name}</div>
        <div className='info'>{info}</div>
        <div className='price'>£{price}</div>
    </>
   )
}
  
export default TeaMenuItem