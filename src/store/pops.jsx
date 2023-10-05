import React from 'react'
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/book.png";
import alarm from "./../assets/img/alarm.png";
import add from "./../assets/img/add.png";
import cake from "./../assets/img/cake.png";
import port from "./../assets/img/profile.jpg";
import search from "./../assets/img/search.png";
import { motion } from 'framer-motion';
import Nav from './nav';
import { all,more } from './food';
import chick from "./../assets/img/food3.png";
import { useGlobal } from '../context';
const Slot = ({img,time,name,price}) =>{
  const { list, setList } = useGlobal();
  const handleOrderClick = () => {
    // Create a new object representing the ordered item
    const orderedItem = {
      img,
      time,
      name,
      price,
    };
    const updatedList = [...list, orderedItem];
    setList(updatedList);
  };
  // Generate a random hue value between 0 and 360
  const randomHue = Math.floor(Math.random() * 361);

  // Define fixed saturation and lightness values
  const saturation = 100; // 100% saturation
  const lightness = 80; // 30% lightness

  // Create the HSL color string
  const randomBackgroundColor = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;
  return (
    <motion.section
      initial={{
        x: "-30vw",
      }}
      exit={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex bg-white rounded-xl px-3 py-2 h-[120px] sh2 mt-4 "
    >
      <div
        style={{ backgroundColor: randomBackgroundColor }} // Set the random background color
        className=" flex items-center justify-center rounded-xl px-4 h-[100%] "
      >
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col w-[100%] items-start px-2 justify-between">
        <div>
          <h3 className="font-[600] text-[16px]">{name}</h3>
          <p className="font-[600] text-gray-600 text-[15px]">{time}</p>
        </div>
        <div className="flex w-[100%] justify-between  items-center">
          <h3 className="font-[600] text-[16px]">{price}</h3>
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={handleOrderClick}
            className="bg-red-600 px-4 py-1 rounded-md text-white font-[500] "
          >
            Order
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
const Slot2 = ({img,time,name,price}) =>{
   const { list, setList } = useGlobal();
   const handleOrderClick = () => {
     // Create a new object representing the ordered item
     const orderedItem = {
       img,
       time,
       name,
       price,
     };
     const updatedList = [...list, orderedItem];
     setList(updatedList);
   };
    return (
      <section className="flex bg-white rounded-xl px-3 py-2 h-[120px] sh2 mt-4 ">
        <div className="flex items-center justify-center rounded-xl px-4 h-[100%] ">
          <img className="rounded-xl h-[99%] w-[200px]   " src={img} alt="" />
        </div>
        <div className="flex flex-col w-[100%] items-start px-2 justify-between">
          <div>
            <h3 className="font-[600] text-[16px]">{name}</h3>
            <p className="font-[600] text-gray-600 text-[15px]">{time}</p>
          </div>
          <div className="flex w-[100%] justify-between  items-center">
            <h3 className="font-[600] text-[16px]">{price}</h3>
            <motion.button
             whileTap={{
              scale:0.9
             }}
             whileHover={{
              scale:1.04
             }}
              transition={{
                duration: 0.3,
              }}
              onClick={handleOrderClick}
              className="bg-red-600 px-4 py-1 rounded-md text-white font-[500] "
            >
              Order
            </motion.button>
          </div>
        </div>
      </section>
    );
}
function Pops() {
  return (
    <motion.main
      initial={{
        x: "-30vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="h-[100%] pb-20 py-10 px-5 w-screen  "
    >
      <section className="flex mb-12 justify-between items-center  ">
        <img
          src={port}
          className="h-[50px] sh2 w-[50px] rounded-[50%] "
          alt=""
        />
        <p className="font-[600]">Popular Menu</p>
        <section className="relative">
          <img src={alarm} alt="" />
          <div className="h-[10px] rounded-[50%] bg-red-600 absolute -top-1 right-0 w-[10px] "></div>
        </section>
      </section>

      <div className="flex mt-10 justify-between items-center">
        <div className="flex  bg-gray-100 items-center justify-start gap-3  rounded-md px-4 py-4 w-[280px]  ">
          <img src={search} className="" alt="" />
          <input type="text" placeholder="Search meals" />
        </div>
        <img src={add} alt="" />
      </div>

      <section className="flex mt-8 flex-col gap-4 ">
        {all.map((d, id) => {
          return (
            <Slot time={d.time} price={d.prize} img={d.img} name={d.name} />
          );
        })}
      </section>
      <section className="flex mt-8 flex-col gap-4 ">
        {more.map((d, id) => {
          return (
            <Slot2 time={d.time} price={d.prize} img={d.img} name={d.name} />
          );
        })}
      </section>

      <button></button>
      <Nav />
    </motion.main>
  );
}

export default Pops
