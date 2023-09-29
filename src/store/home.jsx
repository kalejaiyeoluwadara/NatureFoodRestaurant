import React from 'react'
import Nav from './nav';
import alarm from './../assets/img/alarm.png'
import add from "./../assets/img/add.png";
import search from "./../assets/img/search.png";
import wing from "./../assets/img/wing.png";
import Menu from './menu';
import Popular from './popular';
function Home() {
  return (
    <div className="h-[100%] py-10 px-8 relative  w-screen ">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* <img src="" alt="" /> */}
          <div className="h-[50px]  w-[50px] rounded-[50%] bg-white shadow-md "></div>
          <div className="leading-[23px]">
            <h1 className="font-[600] text-[22px] ">Welcome, Dara</h1>
            <p className="text-gray-500">Lagos, Nigeria</p>
          </div>
        </div>

        <img src={alarm} alt="" />
      </header>

      <div className="flex mt-10 justify-between items-center">
        <div className="flex bg-gray-100 items-center justify-center  rounded-md px-4 py-4 w-[300px]  ">
          <img src={search} className="mr-4" alt="" />
          <input type="text" placeholder="search meal" />
        </div>
        <img src={add} alt="" />
      </div>

      <main className="bg-[#25401D] mt-8 px-6 py-6 rounded-xl flex items-end justify-end gap-6 ">
        <div className="flex items-start flex-col gap-6">
          <p className="text-[24px] text-white font-[600]  ">
            Always ready for you
          </p>
          <button className="flex bg-white rounded-md px-3 py-2 text-black  ">
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
      <Popular />
     
      <Nav />
    </div>
  );
}

export default Home
