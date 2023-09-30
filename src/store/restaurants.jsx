import React from "react";
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/booking.png";
import alarm from "./../assets/img/alarm.png";
import add from "./../assets/img/add.png";
import cake from "./../assets/img/cake.png";
import port from "./../assets/img/port3.jpg";
import place from "./../assets/img/place.jpg";
import search from "./../assets/img/search.png";
import Nav from "./nav";
import chick from "./../assets/img/food3.png";
const Slot = () => {
  return (
    <section className="flex flex-col gap-2">
      <div>
        <img className="h-[130px] rounded-xl w-[150px] " src={place} alt="" />
      </div>
      <div className="flex items-center justify-between ">
        <section>
          <p className="font-[600]">Bluesky Joint</p>
          <p className="text-gray-700 font-[500] ">Tues-Friday</p>
        </section>
        <img className="h-[25px]" src={book} alt="" />
      </div>
    </section>
  );
};
function Restaurants() {
  return (
    <main className="h-[100%] py-10 pb-40 px-5 w-screen  ">
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
          <input type="text" placeholder="Search Restaurants" />
        </div>
        <img src={add} alt="" />
      </div>

      <section className="flex mt-8 items-center justify-center gap-4 flex-wrap">
        {
            [1,2,3,45,6,7,8,8].map((d) =>{
                return <Slot />;
            })
        }
      </section>

      <Nav />
    </main>
  );
}

export default Restaurants;
