import React from 'react'
import start from './../../assets/img/pizza.png'
import logo from './../../assets/img/logo.png'
import { useGlobal } from '../../context'
import {motion,AnimatePresence} from 'framer-motion'
function Start() {
  const {setView} = useGlobal()
  return (
    <motion.div
      exit={{
        y: -100,
        opacity: 0,
      }}
      onClick={() => {
        setView({ a: false, b: true, c: false, d: false, e: false });
      }}
      className="flex items-center flex-col "
    >
      <motion.img
        exit={{
          y: -100,
          opacity: 0,
        }}
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
          duration: 0.5,
        }}
        className=" object-contain translate-x-4 overflow-x-hidden    "
        src={start}
        alt=""
      />
      <img src={logo} alt="" />
    </motion.div>
  );
}

export default Start
