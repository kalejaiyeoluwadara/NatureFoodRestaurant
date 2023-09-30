import React from 'react'
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/book.png";
import alarm from "./../assets/img/alarm.png";
import add from "./../assets/img/add.png";
import cake from "./../assets/img/cake.png";
import port from "./../assets/img/port3.jpg";
import search from "./../assets/img/search.png";
import Nav from './nav';
import chick from "./../assets/img/food3.png";
const Slot = () =>{
    return(
         <section className="flex bg-white rounded-xl px-3 py-2 h-[120px] sh2 mt-4 ">
        <div className="bg-red-300 flex items-center justify-center rounded-xl px-4 h-[100%] ">
          <img src={chick} alt="" />
        </div>
        <div className="flex flex-col w-[100%] items-start px-2 justify-between">
          <div>
            <h3 className="font-[600] text-[16px]">Chicken Salad</h3>
            <p className="font-[600] text-gray-600 text-[15px]">1hr-30min</p>
          </div>
          <div className="flex w-[100%] justify-between  items-center">
            <h3 className="font-[600] text-[16px]">$30.00</h3>
            <button className="bg-red-600 px-4 py-1 rounded-md text-white font-[500] ">
              Order
            </button>
          </div>
        </div>
      </section>
    )
}
function Pops() {
  return (
    <main className="h-[100%] py-10 px-5 w-screen  ">
      <section className="flex mb-12 justify-between items-center  ">
        <img
          src={port}
          className="h-[50px] sh2 w-[50px] rounded-[50%] "
          alt=""
        />
        <p className="font-[600]">Popular Menu</p>
        <section className="relative">
          <img src={alarm} alt="" />
          <div className="h-[10px] rounded-[50%] bg-red-600 absolute -top-1 right-0 w-[10px] "></div>
        </section>
      </section>

      <div className="flex mt-10 justify-between items-center">
        <div className="flex bg-gray-100 items-center justify-center  rounded-md px-4 py-4 w-[300px]  ">
          <img src={search} className="mr-4" alt="" />
          <input type="text" placeholder="search meal" />
        </div>
        <img src={add} alt="" />
      </div>

      <section className="flex mt-8 flex-col gap-4 ">
        {
            [1,2,3,4,5,6,7,8].map((d)=>{
                return <Slot />;
            })
        }
      </section>

      <button></button>
      <Nav />
    </main>
  );
}

export default Pops
