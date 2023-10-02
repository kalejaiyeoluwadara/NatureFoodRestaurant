import React from "react";
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/booking.png";
import alarm from "./../assets/img/alarm.png";
import add from "./../assets/img/add.png";
import cake from "./../assets/img/cake.png";
import port from "./../assets/img/profile.jpg";
import place from "./../assets/img/rest2.jpg";
import search from "./../assets/img/search.png";
import Nav from "./nav";
import chick from "./../assets/img/food3.png";
import { more } from "./book";
import { motion } from "framer-motion";
const Slot = ({img,name,time}) => {
  return (
    <motion.section
    whileHover={{
      y:-7
    }}
    transition={{
      duration:0.3
    }}
    className="flex cursor-pointer flex-col gap-2">
      <div>
        <img className="h-[130px] rounded-xl w-[150px] " src={img} alt="" />
      </div>
      <div className="flex items-center justify-between ">
        <section>
          <p className="font-[600]">{name}</p>
          <p className="text-gray-700 font-[500] ">{time}</p>
        </section>
        <img className="h-[25px]" src={book} alt="" />
      </div>
    </motion.section>
  );
};
function Restaurants() {
  return (
    <motion.main
    initial={{
      opacity:0.2
    }}
    animate={{
      opacity:1
    }}
    transition={{
      duration:0.4
    }}
    className="h-[100%] py-10 mb-20 px-5 w-screen  ">
      <section className="flex mb-12 justify-between items-center  ">
        <img
          src={port}
          className="h-[50px] sh2 w-[50px] rounded-[50%] "
          alt=""
        />
        <p className="font-[600] text-[19px] ">Popular Menu</p>
        <section className="relative">
          <img src={alarm} alt="" />
          <div className="h-[10px] rounded-[50%] bg-red-600 absolute -top-1 right-0 w-[10px] "></div>
        </section>
      </section>

      <div className="flex mt-10 justify-between items-center">
        <div className="flex  bg-gray-100 items-center justify-start gap-3  rounded-md px-4 py-4 w-[270px]  ">
          <img src={search} className="" alt="" />
          <input type="text" placeholder="Search Restaurants" />
        </div>
        <img src={add} alt="" />
      </div>
      <p className="mt-8 mb-3 font-[600] text-[20px] ">Popular Restaurants</p>
      <section className="flex mt-2 items-center justify-between gap-4 flex-wrap">
        {
            more.map((d) =>{
                return <Slot name={d.name} time={d.time} img={d.img} />;
            })
        }
      </section>

      <Nav />
    </motion.main>
  );
}

export default Restaurants;
