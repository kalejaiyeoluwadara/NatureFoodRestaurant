import React,{useState,useContext} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {
  const [start,setStart] = useState(true)
  const [started,setStarted] = useState(false)
  const [welcome, setWelcome] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [home,setHome] = useState(false);
  const [cart,setCart] = useState(false)
  const [bookings, setBookings] = useState(false);
  const [pops, setPops] = useState(false);
  const setView = ({
    a = false,
    b = false,
    c = false,
    d = false,
    e = false,
    f = false,
    g = false,
    h = false,
    i= false,
  }) => {
    setStart(a);
    setWelcome(b);
    setStarted(c);
    setSignup(d);
    setLogin(e);
    setHome(f);
    setCart(g)
    setBookings(h)
    setPops(i)
        
          console.log(cart);
    

  };
 
  return (
    <AppContext.Provider
      value={{
        start,
        pops,setPops,
        started,
        setStart,
        welcome,
        setWelcome,
        signup,
        home,
        setSignup,
        login,
        setLogin,setView,setCart,cart,bookings,setBookings
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () =>{
    return(
        useContext(AppContext)
    )
}

export default AppProvider
