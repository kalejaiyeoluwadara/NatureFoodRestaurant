import React from 'react'
import mail from './../assets/img/mail.png'
function Foot({name,img}) {
  return (
    <div className='flex flex-col  items-center ' >
      <img src={img} alt="" />
      <p className='text-gray-500'>{name}</p>
    </div>
  )
}

export default Foot
