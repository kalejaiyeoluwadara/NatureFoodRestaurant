import React from 'react'
import food from './../assets/img/chaw1.jpg'
import { motion } from "framer-motion";
import cancel from "./../assets/img/cancel.png";
import { useGlobal } from '../context';
const Slot = () =>{
    return (
      <section className="flex px-2 py-3 items-center justify-between w-full rounded-xl bg-gray-100 ">
        <div className="flex gap-4 items-center">
          <img className="h-[50px] w-[50px] rounded-md  " src={food} alt="" />
          <div>
            <h1 className="font-[500] text-[18px] ">Special Pizza</h1>
            <p className="font-[600]">$30.00</p>
          </div>
        </div>
        <img src={cancel} alt="" />
      </section>
    );
}
function Buy() {
    const {setView} = useGlobal()
  return (
    <motion.div
      initial={{
        opacity: 0.2,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className=" h-[100%]  py-10 px-6"
    >
      <section className="h-[340px]  mb-6 rounded-xl w-[full] ">
        <img className="h-[100%] rounded-xl object-cover " src={food} alt="" />
      </section>
      <section>
        <article className="flex  justify-between mb-7">
          <div className="">
            <h1 className="font-[600] text-[20px] ">Chicken Salad</h1>
            <p>1hr-30min</p>
          </div>
          <div className="font-[600] text-red-600">
            <p>$30.00</p>
          </div>
        </article>
        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sapiente, fuga aliquid, consectetur
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <p className="font-[600] text-gray-900 ">Other carts</p>
        <Slot />
        <Slot />
      </section>
      <div className="flex items-center justify-center mt-6">
        <button
          onClick={() => {
            setView({
              a: false,
              b: false,
              c: false,
              d: false,
              e: false,
              f: true,
              g: false,
              j: false,
            });
          }}
          className="w-[360px] flex items-center justify-center py-3 bg-[#25401D] rounded-md text-white font-[500] text-[20px] "
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

export default Buy
