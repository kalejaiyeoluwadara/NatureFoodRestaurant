//create a react component
import React from 'react'
import Start from '../home/start'
import Welcome from '../home/welcome'
import Started from "../home/started";
import Signup from '../home/signup';
import Login from '../home/login';
import Home from '../../store/home';
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
        login,home,
        setLogin,setView} = useGlobal();
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
      </AnimatePresence>
    </motion.div>
  );
}

export default Admin
