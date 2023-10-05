import React from 'react'
import food2 from "./../assets/img/food2.png";
import food1 from "./../assets/img/food1.png";
import { useGlobal } from '../context';
const Slot = ({name,time,img}) =>{
  const {setView} = useGlobal();
    return (
      <div className="flex  relative flex-col gap-2 ">
        <img className="h-[100px]" src={img} alt="" />
        <section className="flex justify-between">
          <div>
            <h3 className="font-[600]  text-ellipsis  text-[16px]">{name}</h3>
            <p className="font-[600] text-gray-600 text-[15px]">{time}min</p>
          </div>
          <button
            onClick={() => {
              setView({ f: false, g: false, h: false, i: true });
            }}
            className="h-[33px] absolute right-0 flex items-center justify-center bg-red-600 text-white font-[600] text-[22px] w-[33px] rounded-[50%] "
          >
            +
          </button>
        </section>
      </div>
    );
}
function Menu() {
  const {setView} =useGlobal()
  return (
    <main className="flex mt-8 flex-col gap-5 ">
      <div className="flex items-center justify-between">
        <h1 className="font-[600] text-[20px] ">Available Menu</h1>
        <p
          onClick={() => {
            setView({ f: false, g: false, h: false, i: true });
          }}
          className="font-[500] text-gray-600 text-[15px] "
        >
          View more
        </p>
      </div>
      <div className="flex gap-3 justify-between  items-start">
        <Slot name={"Tomato pizza"} img={food1} time={"30"} />
        <Slot name={"Chicken shawarma"} img={food2} time={"15"} />
      </div>
    </main>
  );
}

export default Menu
