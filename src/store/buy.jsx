import React from 'react'
import food from './../assets/img/chaw1.jpg'
import { motion,AnimatePresence } from "framer-motion";
import cancel from "./../assets/img/cancel.png";
import { useGlobal } from '../context';
const Slot = ({name,price,img}) =>{
  const {list,setList} = useGlobal();
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
          duration: 0.2,
        }}
        className="flex px-2 py-3 items-center justify-between w-full rounded-xl bg-gray-100 "
      >
        <div className="flex gap-4 items-center">
          <img className="h-[50px] w-[50px] rounded-md  " src={img} alt="" />
          <div>
            <h1 className="font-[500] text-[18px] ">{name} Pizza</h1>
            <p className="font-[600]">{price}</p>
          </div>
        </div>
        <img onClick={handleRemoveClick} src={cancel} alt="" />
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
function Buy() {
    const {setView,list,arr,setArr} = useGlobal()
  return (
    <>
      {arr === null ? (
        <div className='flex items-center justify-center '>
          <h1>Empty</h1>
        </div>
      ) : (
        <motion.div
          initial={{
            opacity: 0.2,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
          }}
          className=" h-[100%]  py-10 px-6"
        >
          <section className="h-[340px] flex items-center justify-center  mb-6 rounded-xl w-[full] ">
            <img
              className="h-[100%]  rounded-xl object-cover "
              src={arr[0].img}
              alt=""
            />
          </section>
          <section>
            <article className="flex  justify-between mb-7">
              <div className="">
                <h1 className="font-[600] text-[20px] ">{arr[0].name}</h1>
                <p>1hr-30min</p>
              </div>
              <div className="font-[600] text-red-600">
                <p>{arr[0].price}</p>
              </div>
            </article>
            <div className="mb-6">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                sapiente, fuga aliquid, consectetur
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-3">
            <p className="font-[600] text-gray-900 ">Other carts</p>
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
          <div className="flex items-center justify-center mt-6">
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
                  j: false,
                });
                setArr(null);
              }}
              className="w-[360px] flex items-center justify-center py-3 bg-[#25401D] rounded-md text-white font-[500] text-[20px] "
            >
              Buy Now
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default Buy
