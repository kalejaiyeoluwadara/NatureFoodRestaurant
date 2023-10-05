import React from 'react'
import chick from './../assets/img/food3.png'
import {motion} from 'framer-motion'
import { useGlobal } from '../context';
function Popular() {
  const { setCart, setPops, setView } = useGlobal();
  return (
    <main className="mt-6 mb-20 ">
      <div className="flex items-center justify-between">
        <h1 className="font-[600] text-[20px] ">Popular Menu</h1>
        <p
          onClick={() => {
            setView({ f: false, g: false, h: false, i: true });
          }}
          className="font-[500] text-gray-600 text-[15px] "
        >
          View more
        </p>
      </div>
      <section className="flex bg-white rounded-xl px-3 py-2 h-[120px] sh2 mt-4 ">
        <div className="bg-red-300 flex items-center justify-center rounded-xl px-4 h-[100%] ">
          <img src={chick} alt="" />
        </div>
        <div className="flex flex-col w-[100%] items-start px-2 justify-between">
          <div>
            <h3 className="font-[600] text-[16px]">Chicken Salad</h3>
            <p className="font-[600] text-gray-600 text-[15px]">1hr-30min</p>
          </div>
          <div
            onClick={() => {
              setView({ f: false, g: false, h: false,i:true });
            }}
            className="flex w-[100%] justify-between  items-center"
          >
            <h3 className="font-[600] text-[16px]">$30.00</h3>
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              transition={{
                duration: 0.1,
              }}
              className="bg-red-600 px-4 py-1 rounded-md text-white font-[500] "
            >
              Order
            </motion.button>
          </div>
        </div>
      </section>
      <div className="w-full flex items-center justify-center mt-8">
        <motion.p
          whileTap={{
            scale: 0.9,
          }}
          transition={{
            duration: 0.1,
          }}
          onClick={() => {
            setView({ f: false, g: false, h: false, i: true });
          }}
          className="font-[600] text-gray-600 text-[15px]"
        >
          {"see more >>"}
        </motion.p>
      </div>
    </main>
  );
}

export default Popular
