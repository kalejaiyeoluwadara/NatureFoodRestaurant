import React from 'react'
import Nav from './nav';
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/book.png";
import cake from "./../assets/img/cake.png";
import search from "./../assets/img/search.png";
const Slot = () =>{
    return (
      <section className=" sh2 flex justify-between w-[100%] py-2 px-2 rounded-xl ">
        <div>
          <img className='h-[100px]' src={cake} alt="" />
        </div>
        <div>
          <h3 className="font-[500] text-[16px]">Special Pankcake</h3>
          <p className="font-[600] text-[16px]">$30.00</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <p className="font-[600] text-[20px] ">x</p>
          <div className="flex p-2 items-center justify-center h-[30px] w-[30px] rounded-full bg-red-200  ">
            <img className="h-[13px] w-[13px] " src={book} alt="" />
          </div>
        </div>
      </section>
    );
}
function Cart() {
  return (
    <main className='h-[100%] pb-40 py-10 px-5 w-screen  ' >
        <section className='flex mb-12 justify-between items-center  '>
            <img src={search} alt="" />
            <p className='font-[600]'>Cart</p>
            <img src={cart} alt="" />
        </section>

        <section className='flex flex-col gap-4 '>
            {
                [1,2,3,4,4,5,6].map((d)=>{
                    return <Slot />;
                })
            }
        </section>
      <Nav />
    </main>
  );
}

export default Cart
