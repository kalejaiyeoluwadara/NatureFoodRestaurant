import React from 'react'
import food2 from "./../assets/img/food2.png";
import food1 from "./../assets/img/food1.png";
const Slot = ({name,time,img}) =>{
    return (
      <div className="flex  flex-col gap-2 ">
        <img className='h-[100px]' src={img} alt="" />
        <section className="flex justify-between">
          <div>
            <h3 className="font-[600]  text-ellipsis  text-[16px]">{name}</h3>
            <p className="font-[600] text-gray-600 text-[15px]">{time}min</p>
          </div>
          <button className="h-[33px] flex items-center justify-center bg-red-600 text-white font-[600] text-[22px] w-[33px] rounded-[50%] ">
            -
          </button>
        </section>
      </div>
    );
}
function Menu() {
  return (
    <main className="flex mt-8 flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h1 className="font-[600] text-[20px] ">Available Menu</h1>
        <p className="font-[500] text-gray-400 text-[14px] ">View more</p>
      </div>
      <div className="flex gap-3 justify-between  items-center">
        <Slot name={"Tomato pizza"} img={food1} time={"30"} />
        <Slot name={"Chicken shawarma"} img={food2} time={"15"} />
      </div>
    </main>
  );
}

export default Menu
