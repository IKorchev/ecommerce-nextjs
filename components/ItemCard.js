import Image from 'next/image';
import { useState } from 'react';
import { useStore } from '../contexts/StoreContext';
import ShoppingCartIcon from '@heroicons/react/outline/ShoppingCartIcon';
import SelectMenu from './SelectMenu';

const ItemCard = ({ title, description, price, image, id }) => {
  const { dispatch } = useStore();
  const [quantity, setQuantity] = useState(1);
  const item = { title, image, id, quantity: quantity, price };
  return (
    <div className='item w-80'>
      <div className='relative mx-auto w-full md:h-48 mt-2'>
        <Image src={image} alt={title} layout='fill' objectFit='contain' />
      </div>
      <div className='p-5'>
        <div className='flex flex-col relative justify-between overflow-hidden items-center my-4'>
          <h1 className='text-md font-semibold text-center md:text-start'>{title}</h1>
        </div>
        <p className='truncate'>{description}</p>

        <div className='flex items-center justify-between mt-8 '>
          <SelectMenu setQuantity={setQuantity} options={[1, 2, 3, 4, 5, 6]} />
          <p className='text-md font-semibold '>${(price * quantity).toFixed(2)}</p>

          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
            className='relative hidden md:flex items-center bg-green-500 text-sm text-white rounded-md font-semibold px-3 py-2
           hover:bg-green-800 transform transition duration-200 '>
            <ShoppingCartIcon className='h-6 mr-2' /> Add to cart
          </button>
          <button
            onClick={(e) => dispatch({ type: 'ADD_TO_CART', payload: item })}
            className='relative flex md:hidden items-center  text-lg rounded-md font-semibold px-3 py-2
           hover:bg-green-100 transform transition origin-left border duration-200 '>
            <ShoppingCartIcon className='h-6' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
