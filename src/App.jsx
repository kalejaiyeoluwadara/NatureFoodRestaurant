
// export default App
import React, { useState,useContext, createContext } from 'react';
import Admin from './pages/admin/admin';
const App = () =>{
    return (
      <div className='h-screen overflow-x-hidden w-screen bg-white  ' >
        <Admin/>
      </div>
    );
}


export default App;
