import React from 'react'
import account from './../../assets/img/Account.png'
import logo from './../../assets/img/logo.png'
import user from "./../../assets/img/user.png";
import lock from './../../assets/img/lock.png'
import msg from './../../assets/img/msg.png'
import {motion} from 'framer-motion'
import { useGlobal } from '../../context';

function Signup() {
    const { setView ,userName,setUserName} = useGlobal();
    const handleChange = (e) =>{
      setUserName(e.target.value);
    }
  return (
    <motion.main
      initial={{
        x: "50vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex py-20 flex-col justify-between items-center "
    >
      <div>
        <img src={account} alt="" />
      </div>
      <div className="flex items-center flex-col justify-center mt-6 gap-6 ">
        <p className="font-[600] opacity-80 text-[23px] ">Sign up for free</p>
        <div className="flex flex-col gap-4 ">
          <div className="flex rounded-[6px] sh  w-[320px] px-2 py-3 put gap-3 ">
            <img src={user} alt="" />
            <input value={userName} onChange={handleChange} className="in" placeholder="User name" type="text" />
          </div>
          <div className="flex rounded-[6px] sh  w-[320px] px-2 py-3 put gap-3 ">
            <img src={msg} alt="" />
            <input className="in" placeholder="Email" type="mail" />
          </div>
          <div className="flex rounded-[6px] sh  w-[320px] px-2 py-3 put gap-3 ">
            <img src={lock} alt="" />
            <input className="in" placeholder="Password" type='password' />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6 justify-center gap-4  ">
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
            });
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
