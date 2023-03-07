import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon';
import UserIcon from '@heroicons/react/outline/UserIcon';
import { useStore } from '../contexts/StoreContext';
import Link from 'next/link';
const Navbar = () => {
  const { state, cartShowHandler } = useStore();
  return (
    <nav
      className='flex justify-between
    px-5 md:px-12 mx-auto items-center fixed top-0 z-20 py-2 bg-gray-100 w-full '>
      <Link passHref href='/' target='_blank' rel='noreferrer' className='logo h-full'>
        <h1 className='text-black cursor-pointer text-2xl py-5 font-bold'>Ecomm</h1>
      </Link>
      <div className='flex items-center'>
        <button className='text-lg font-semibold mr-5 rounded-full p-2 text-gray-800 translate duration-300 hover:bg-gray-200'>
          <UserIcon className='h-7' />
        </button>
        <div className='z-10 rounded-full '>
          <button onClick={cartShowHandler} className='relative text-lg font-semibold transform focus:scale-95 rounded-full p-2 text-gray-800 translate duration-300 hover:bg-gray-200'>
            <ShoppingCartIcon className='h-7 ' />
            <div className='absolute grid place-items-center -top-2 -right-3 bg-red-300 rounded-full text-sm h-6 w-6 z-10'>{state.items ? state.items.length : 0}</div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
