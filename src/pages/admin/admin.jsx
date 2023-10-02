//create a react component
import React from 'react'
import Start from '../home/start'
import Welcome from '../home/welcome'
import Started from "../home/started";
import Signup from '../home/signup';
import Login from '../home/login';
import Home from '../../store/home';
import Cart from '../../store/cart';
import Pops from '../../store/pops';
import Buy from '../../store/buy';
import Restaurants from '../../store/restaurants';
import { motion, AnimatePresence } from "framer-motion";
import { useGlobal } from '../../context';
function Admin() {
  const {start,
        setStart,
        welcome,
        setWelcome,
        signup,
        started,
        setSignup,
        buy,
        login,home,
        setLogin,setView,cart,bookings,pops} = useGlobal();
  return (
    <motion.div>
      <AnimatePresence>
         {start && (
          <AnimatePresence>
            <Start />
          </AnimatePresence>
        )}
        {welcome && <Welcome />}
        {started && <Started />}
        {signup && <Signup />}
        {login && <Login />} 
        {home && <Home/>}
        {cart && <Cart/>}
        { bookings && <Restaurants/>}
        {pops && <Pops/>}
        {buy&& <Buy/>}
      </AnimatePresence>
    </motion.div>
  );
}

export default Admin
