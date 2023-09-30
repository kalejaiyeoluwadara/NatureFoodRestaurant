import React from 'react'
import { useEffect } from 'react';
import Nav from './nav';
import alarm from './../assets/img/alarm.png'
import add from "./../assets/img/add.png";
import search from "./../assets/img/search.png";
import wing from "./../assets/img/wing.png";
import port from "./../assets/img/port3.jpg";
import Menu from './menu';
import { useGlobal } from '../context';
import Popular from './popular';
function Home() {
  const { setCart,setPops,setView } = useGlobal();
  
  return (
    <div className="h-[100%] py-10 px-8 relative  w-screen ">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={port}
            className="h-[50px] sh2 w-[50px] rounded-[50%] "
            alt=""
          />
          {/* <div className="h-[50px]  w-[50px] rounded-[50%] bg-white shadow-md "></div> */}
          <div className="leading-[23px]">
            <h1 className="font-[600] text-[22px] ">Welcome, Dara</h1>
            <p className="text-gray-500">Lagos, Nigeria</p>
          </div>
        </div>

        <section className="relative">
          <img src={alarm} alt="" />
          <div className="h-[10px] rounded-[50%] bg-red-600 absolute -top-1 right-0 w-[10px] "></div>
        </section>
      </header>

      <div className="flex mt-10 justify-between items-center">
        <div className="flex bg-gray-100 items-center justify-center  rounded-md px-4 py-4 w-[260px]  ">
          <img src={search} className="mr-4" alt="" />
          <input type="text" placeholder="search meal" />
        </div>
        <img src={add} alt="" />
      </div>

      <main className="bg-[#25401D] mt-8 px-6 py-6 rounded-xl flex items-end justify-end gap-6 ">
        <div className="flex items-start flex-col gap-6">
          <p className="text-[20px] text-white font-[600]  ">
            Always ready for you
          </p>
          <button className="flex bg-white rounded-md px-5 py-2 text-black  ">
            Buy Now
          </button>
        </div>
        <div className="w-[50%] h-[100%] ">
          <img
            className=" relative -bottom-10 object-contain translate-x-6 w-[210px] "
            src={wing}
            alt=""
          />
        </div>
      </main>
      <Menu />
      <Popular  />

      <Nav />
    </div>
  );
}

export default Home
