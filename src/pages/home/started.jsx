import React from "react";
import veges from "./../../assets/img/veges.png";
import logo from "./../../assets/img/logo.png";
import right from "./../../assets/img/right.png";
import { motion } from "framer-motion";
import { useGlobal } from "../../context";
function Started() {
  const { setView } = useGlobal();
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 1.3,
      }}
      className="flex  py-10 items-center  flex-col "
    >
      <div>
        <motion.img
          
          initial={{
            y: -105,
            x: "23vw",
            scale: 0.8,
          }}
          animate={{
            y: 0,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="object-cover overflow-x-hidden"
          src={veges}
          alt=""
        />
      </div>
      <article className=" flex flex-col items-center justify-center ">
        <div className="flex flex-col px-3 items-center juctify-center mt-3 ">
          <h1 className="font-[500] mt-3 leading-[40px] mb-3 text-center text-[35px] ">
            Get ready to taste the best meals
          </h1>
          <p className="text-center text-[19px] leading-[28px]  ">
            A warm welcome and lots of good wishes on becoming part of our
            growing team.
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setView({ a: false, b: false, c: false, d: true, e: false });
            }}
            className="flex text-white rounded-xl shadow-md py-3 px-4 gap-4 mt-12 w-[290px] bg-[#25401D] capitalize  items-center justify-center "
          >
            get started
            <img className="" src={right} alt="" />
          </button>
        </div>
      </article>
    </motion.div>
  );
}

export default Started;
