import React from 'react'
import start from "./../../assets/img/pizza.png";
import logo from "./../../assets/img/logo.png";
import right from "./../../assets/img/right.png";
import { motion } from "framer-motion";
import { useGlobal } from "../../context";
function Welcome() {
    const col = "#25401D";
    const { setView } = useGlobal();
  return (
    <motion.div
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="flex items-center flex-col "
    >
      <motion.img
        initial={{
          y: 500,
          scale: 0,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className=" -translate-x-[120px] h-[500px] object-cover overflow-x-hidden    "
        src={start}
        alt=""
      />
      <article className="-translate-y-[60px] flex flex-col items-center justify-center ">
        <div className="flex flex-col px-3 items-center juctify-center mt-3 ">
          <h1 className="font-[500] text-[35px] ">Welcome</h1>
          <p className="text-center text-[19px] leading-[28px]  ">
            A warm welcome and lots of good wishes on becoming part of our
            growing team.
          </p>
        </div>
        <div>
          <div className="flex mt-6 gap-3">
            <div className="flex bg-[#25401D] rounded-[20px] w-[30px] h-[14px]  "></div>
            <div className="flex bg-green-100 rounded-[50%] w-[14px] h-[14px]  "></div>
          </div>
          <button
            onClick={() => {
              setView({ a: false, b: false, c: true, d: false, e: false });
            }}
            className="flex h-[50px] mt-12 w-[50px] bg-[#25401D] rounded-[50%]  items-center justify-center "
          >
            <img src={right} alt="" />
          </button>
        </div>
      </article>
    </motion.div>
  );
}

export default Welcome
