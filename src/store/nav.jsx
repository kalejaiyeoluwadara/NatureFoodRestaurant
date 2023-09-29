import React from 'react'
import Foot from './foot'
import mail from "./../assets/img/mail.png";
import lock from "./../assets/img/lock.png";
import bell from "./../assets/img/bell.png";
import cart from "./../assets/img/cart.png";
import book from "./../assets/img/book.png";
import person from "./../assets/img/person.png";

function Nav() {
  return (
    <div className="absolute z-40 left-0 sh2 py-10 pt-12 rounded-xl px-8 flex items-center justify-between bottom-0 w-[100%] h-[50px]  ">
      <Foot name={"Home"} img={mail} />
      <Foot name={"Notification"} img={bell} />
      <Foot name={"Profile"} img={person} />
      <Foot name={"Bookings"} img={book} />
      <Foot name={"Cart"} img={cart} />
    </div>
  );
}

export default Nav
