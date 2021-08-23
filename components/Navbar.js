import ShoppingCartIcon from "@heroicons/react/outline/ShoppingCartIcon"
import { useStore } from "../contexts/StoreContext"

const Navbar = () => {
  const { state, cartShowHandler } = useStore()
  return (
    <nav
      className='flex justify-between
     px-24 mx-auto items-center fixed top-0 z-20 py-2 bg-gray-100 w-full '>
      <div className='logo'>
        <h1 className='bg-black text-white px-5 py-2'>Logo here</h1>
      </div>
      <div className='flex items-center'>
        <a href='#' className='text-lg font-semibold mr-5'>
          1
        </a>
        <a href='#' className='text-lg font-semibold mr-5'>
          2
        </a>
        <div className='z-10 rounded-full'>
          <button
            onClick={cartShowHandler}
            className='relative text-lg font-semibold  rounded-full p-2 text-gray-800 translate duration-300 hover:bg-gray-200'>
            <ShoppingCartIcon className='h-7  transform active:scale-95' />
            <div className='absolute grid place-items-center -top-2 -right-3 bg-red-300 rounded-full text-sm h-6 w-6 z-10'>
              {state.items ? state.items.length : 0}
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
