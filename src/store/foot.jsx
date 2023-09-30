import React, { useState } from 'react'
import mail from './../assets/img/mail.png'
import { useGlobal } from '../context';
function Foot({name,img,func}) {
  const [check,setCheck] =useState(false);
    const { cart,home,bookings} = useGlobal();
    // ${name ?'text-red-600':'text-gray-500'}
  return (
    <div
      className={`flex flex-col   hover:text-red-600 hover:font-bold cursor-pointer items-center `}
    >
      <img className="h-[20px]" src={img} alt="" />
      <p className=" transition-[0.3] text-[14px] ">{name}</p>
    </div>
  );
}

export default Foot
