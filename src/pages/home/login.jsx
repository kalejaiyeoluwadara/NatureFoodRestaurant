import React from "react";
import account from "./../../assets/img/Password.png";
import logo from "./../../assets/img/logo.png";
import user from "./../../assets/img/user.png";
import facebook from "./../../assets/img/facebook.png";
import google from "./../../assets/img/google.png";
import lock from "./../../assets/img/lock.png";
import msg from "./../../assets/img/msg.png";
import { motion } from "framer-motion";
const Input = ({ place }) => (
  <div className="flex rounded-[6px]  sh  w-[320px] px-4 py-3 put  ">
    <input className="in placeholder:ml-6 " placeholder={place} type="text" />
  </div>
);
function Login() {
  return (
    <motion.main
     initial={{
        y: "-100vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
       className="flex pt-12 flex-col justify-between items-center ">
      <div>
        <img src={account} alt="" />
        <p className="font-[600] opacity-80 text-[23px] ">
          Log in to your account
        </p>
      </div>
      <div className="flex items-center flex-col justify-center mt-10 gap-6 ">
        <div className="flex flex-col gap-5 ">
          <Input place={"Email"} />
          <Input place={"Password"} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 flex-col">
        <p className="font-[600] opacity-70 ">or continue with</p>
        <div className="flex  mt-4 gap-8 ">
          <div className="sqr flex gap-3 items-center justify-center" >
            <img src={facebook} alt="" />
            Facebook</div>
          <div className="sqr flex gap-3 items-center justify-center" >
            <img src={google} alt="" />
            Google</div> 
        </div>
      </div>
      <p className="text-red-500 font-[600] ">forgot your password?</p>
      <div className="flex flex-col items-center mt-6 justify-center gap-4  ">
        <button className="flex text-white rounded-xl shadow-md py-3 px-4 gap-4 mt-6 w-[290px] bg-[#25401D] capitalize  items-center justify-center ">
          Login
        </button>
      </div>
    </motion.main>
  );
}

export default Login;
