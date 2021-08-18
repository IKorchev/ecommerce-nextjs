import Image from "next/image"
import { useState } from "react"
import { useStore } from "../contexts/StoreContext"
const ItemCard = ({ title, description, price, image, id }) => {
  const { state, dispatch } = useStore()
  const [quantity, setQuantity] = useState(1)

  return (
    <div
      className='bg-white flex flex-col justify-between border shadow-xl w-80 mx-auto mt-24 transition duration-200
       hover:shadow-xl-dark transform hover:-translate-y-0.5'>
      <div className='relative w-full mx-auto h-72 '>
        <Image src={image} layout='fill' objectFit='contain' alt='shoe' />
      </div>
      <div className='px-8 py-5 border-t '>
        <div className='flex justify-between overflow-hidden items-center my-4'>
          <h1 className='text-md font-semibold truncate'>{title}</h1>
          <p className='text-xl font-semibold ml-5 '>${price.toFixed(2)}</p>
        </div>
        <p className='truncate'>{description}</p>
        <div className='flex items-center justify-between mt-8 '>
          <input
            type='number'
            min={1}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value)
            }}
            className='w-16 px-3 border-2 border-black py-2 text-xl font-semibold rounded-lg'
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch({
                type: "ADD_TO_CART",
                payload: { title, image, id, quantity: parseInt(quantity), price },
              })
            }}
            className='bg-gray-900 text-lg text-white rounded-md font-semibold px-3 py-2
           hover:bg-gray-800 transform transition duration-200 '>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
