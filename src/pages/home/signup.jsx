import React from 'react'
import account from './../../assets/img/Account.png'
import logo from './../../assets/img/logo.png'
import user from "./../../assets/img/user.png";
import lock from './../../assets/img/lock.png'
import msg from './../../assets/img/msg.png'
import {motion} from 'framer-motion'
import { useGlobal } from '../../context';
const Input = ({img,place}) => (
  <div className="flex rounded-[6px] sh  w-[320px] px-2 py-3 put gap-3 ">
    <img src={img} alt="" />
    <input className="in" placeholder={place} type="text" />
  </div>
);
function Signup() {
    const { setView } = useGlobal();
  return (
    <motion.main
      initial={{
        x: "100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="flex pt-20 flex-col justify-between items-center "
    >
      <div>
        <img src={account} alt="" />
      </div>
      <div className="flex items-center flex-col justify-center mt-6 gap-6 ">
        <p className="font-[600] opacity-80 text-[23px] ">Sign up for free</p>
        <div className="flex flex-col gap-4 ">
          <Input img={user} place={"User name"} />
          <Input img={msg} place={"Email"} />
          <Input img={lock} place={"Password"} />
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 justify-center gap-4  ">
        <button
          onClick={() => {
            setView({ a: false, b: false, c: false, d: true, e: false });
          }}
          className="flex text-white rounded-xl shadow-md py-3 px-4 gap-4 mt-12 w-[290px] bg-[#25401D] capitalize  items-center justify-center "
        >
          Create Account
        </button>
        <p
          onClick={() => {
            setView({ a: false, b: false, c: false, d: false, e: true });
          }}
          className="text-gray-700 cursor-pointer font-[500] text-[18px] "
        >
          <span className="text-red-600 tracking-wide ">Got an account?</span>{" "}
          Login
        </p>
      </div>
    </motion.main>
  );
}

export default Signup
