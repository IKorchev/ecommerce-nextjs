import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon"
import { useState, useEffect } from "react"
import { useStore } from "../contexts/StoreContext"
import Image from "next/image"
import Cart from "./Cart"

const Navbar = () => {
  const { state, dispatch } = useStore()
  const [cartIsShown, setCartIsShown] = useState(false)
  const handleShowCart = () => {
    setCartIsShown((state) => !state)
  }

  return (
    <nav className='flex justify-between items-center px-5'>
      <div className='logo'>
        <h1 className='bg-black text-white px-5 py-2'>Logo here</h1>
      </div>
      <div className='flex'>
        <a href='#' className='text-lg font-semibold mr-5'>
          1
        </a>
        <a href='#' className='text-lg font-semibold mr-5'>
          2
        </a>
        <div className='relative z-10'>
          <button
            onClick={handleShowCart}
            href='#'
            className='relative text-lg font-semibold mr-0 border rounded-lg p-2
             shadow-md'>
            <ShoppingCartIcon className='h-8' />
            <div className='absolute -bottom-3 -right-3 bg-red-600 rounded-full text-sm h-5 w-5 z-10'>
              {state.items ? state.items.length : 0}
            </div>
          </button>
          <Cart cartIsShown={cartIsShown} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
