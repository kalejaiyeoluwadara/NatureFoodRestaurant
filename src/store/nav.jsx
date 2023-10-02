import React from 'react'
import {motion} from 'framer-motion'
import Foot from './foot'
import mail from "./../assets/img/mail.png";
import home2 from "./../assets/img/home2.png";
import lock from "./../assets/img/lock.png";
import bell from "./../assets/img/bell.png";
import car from "./../assets/img/cart2.png";
import carz from "./../assets/img/cart.png";
import book from "./../assets/img/booking.png";
import book2 from "./../assets/img/book.png";
import person from "./../assets/img/person.png";
import { useGlobal } from '../context';
function Nav() {
  const {
   setView,setCart,setHome,home,bookings,cart
  } = useGlobal();
  return (
    <div className="absolute z-40 bg-white left-0 sh2 py-10 pt-12 rounded-xl px-8 flex items-center justify-between bottom-0 w-[100%] h-[50px]  ">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.1,
        }}
        onClick={() => {
          setView({ f: true, g: false });
        }}
      >
        <div
          className={`flex flex-col ${
            home ? "text-red-600 font-bold " : "text-gray-500"
          }  hover:text-red-600 hover:font-bold cursor-pointer items-center `}
        >
         { home?
          <img className="h-[20px]" src={home2} alt="" />:
          <img className="h-[20px]" src={mail} alt="" />}
          <p className=" transition-[0.3] text-[14px] ">Home</p>
        </div>
      </motion.div>
      <Foot name={"Notification"} img={bell} />
      <Foot name={"Profile"} img={person} />
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.1,
        }}
        onClick={() => {
          setView({ f: false, g: false, h: true });
        }}
      >
        <div
          className={`flex flex-col ${
            bookings ? "text-red-600 font-bold " : "text-gray-500"
          }  hover:text-red-600 hover:font-bold cursor-pointer items-center `}
        >
          {bookings ? (
            <img className="h-[20px]" src={book2} alt="" />
          ) : (
            <img className="h-[20px]" src={book} alt="" />
          )}
          <p className=" transition-[0.3] text-[14px] ">Bookings</p>
        </div>
      </motion.div>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.1,
        }}
        onClick={() => {
          setView({ f: false, g: true, h: false });
        }}
      >
        <div
          onClick={() => {
            setView({ f: true, g: false, h: false });
          }}
        >
          <div
            className={`flex flex-col ${
              cart ? "text-red-600 font-bold " : "text-gray-500"
            }  hover:text-red-600 hover:font-bold cursor-pointer items-center `}
          >
            {cart ? (
              <img className="h-[20px]" src={carz} alt="" />
            ) : (
              <img className="h-[20px]" src={car} alt="" />
            )}
            <p className=" transition-[0.3] text-[14px] ">Cart</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Nav
