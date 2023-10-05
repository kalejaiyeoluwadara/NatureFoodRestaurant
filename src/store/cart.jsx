import React, { useState } from 'react'
import Nav from './nav';
import {motion,AnimatePresence} from 'framer-motion'
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/book.png";
import book2 from "./../assets/img/book2.png";
import cake from "./../assets/img/cake.png";
import cancel from "./../assets/img/cancel.png";
import search from "./../assets/img/search.png";
import { useGlobal } from '../context';
const Slot = ({img,name,price}) =>{
  const { list, setList,setView,arr,setArr } = useGlobal();
     const addPropsToArr = () => {
       // Create an object from the props
       const propsObj = {
         img,
         name,
         price,
       };

       // Add the props object to the arr
       setArr([propsObj]);
       console.log(arr);
     };
    const handleRemoveClick = () => {
      // Find the index of the item to remove
      const itemIndex = list.findIndex((item) => item.name === name);
      if (itemIndex !== -1) {
        // Create a new list without the item to remove
        const updatedList = [
          ...list.slice(0, itemIndex),
          ...list.slice(itemIndex + 1),
        ];

        // Update the list state with the updated list
        setList(updatedList);
      }
    };
    return (
      <motion.section
        initial={{
          x: "-30vw",
        }}
        exit={{
          x: "-100vw",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
       
        className=" sh2 flex justify-between w-[100%] py-2 px-2 rounded-xl "
      >
        <div
          onClick={() => {
            setView({
              a: false,
              b: false,
              c: false,
              d: false,
              e: false,
              f: false,
              g: false,
              j: true,
            });
            addPropsToArr()
          }}
        >
          <img className="h-[100px] rounded-xl " src={img} alt="" />
        </div>
        <div
          onClick={() => {
            setView({
              a: false,
              b: false,
              c: false,
              d: false,
              e: false,
              f: false,
              g: false,
              j: true,
            });
            addPropsToArr();
          }}
        >
          <h3 className="font-[600] text-[18px]">{name}</h3>
          <p className="font-[600] text-gray-600 text-[15px]">{price}</p>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-between ">
          <img onClick={handleRemoveClick} src={cancel} alt="" />
          <div className="flex p-2 items-center justify-center h-[30px] w-[30px] rounded-full bg-gray-200  ">
            <img className="h-[13px]  w-[13px] " src={book2} alt="" />
          </div>
        </div>
      </motion.section>
    );
}
const Empty = () =>{
  return(
    <div className='flex text-gray-600 font-bold items-center justify-center w-full '>
      <h1>You Cart is empty</h1>
    </div>
  )
}
function Cart() {
  const {list,setArr,arr} = useGlobal();
  const [state,setState] = useState([])
  return (
    <motion.main
      initial={{
        opacity: 0.2,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className="h-[100%] pb-40 py-10 px-5 w-screen  "
    >
      <section className="flex mb-12 justify-between items-center  ">
        <img src={search} alt="" />
        <p className="font-[600]">Cart</p>
        <img src={cart} alt="" />
      </section>

      <section className="flex flex-col gap-4 ">
        <AnimatePresence>
          {list.length === 0 ? (
            <Empty />
          ) : (
            list.map((d,id) => {
              return (
                <Slot key={id} name={d.name} price={d.price} img={d.img} />
              );
            })
          )}
        </AnimatePresence>
      </section>

      <Nav />
    </motion.main>
  );
}

export default Cart
