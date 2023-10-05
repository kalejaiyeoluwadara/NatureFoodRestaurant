import React,{useState,useContext} from 'react'

const AppContext = React.createContext()

function AppProvider({children}) {
  const [start,setStart] = useState(true)
  const [userName, setUserName] = useState("user101");
  const [started,setStarted] = useState(false)
  const [welcome, setWelcome] = useState(false);
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [buy, setBuy] = useState(false);
  const [list, setList] = useState([]);
  const [home,setHome] = useState(false);
  const [cart,setCart] = useState(false)
  const [bookings, setBookings] = useState(false);
  const [pops, setPops] = useState(false);
  const [arr,setArr] = useState([]);
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
    j=false,
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
    setBuy(j)    
    

  };
 
  return (
    <AppContext.Provider
      value={{
        userName,setUserName,
        buy,setBuy,
        start,
        pops,setPops,
        list,setList,
        started,
        setStart,
        welcome,
        setWelcome,
        signup,
        home,
        setSignup,
        login,
        setLogin,setView,setCart,cart,bookings,setBookings,arr,setArr
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
