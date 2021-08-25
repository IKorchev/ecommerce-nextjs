import { createContext, useContext, useReducer, useState } from "react"
import  reducer from './StoreReducer'

const StoreContext = createContext()

export const useStore = () => useContext(StoreContext)

const initialState = {
  items: [],
}



const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [cartIsShown, setCartIsShown] = useState(false)
  const cartShowHandler = (e) => {
    e.preventDefault()
    setCartIsShown((state) => !state)
    // document.body.classList.toggle("overflow-y-hidden")
  }
  const value = {
    state,
    dispatch,
    cartIsShown,
    setCartIsShown,
    cartShowHandler,
  }
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default StoreContextProvider
