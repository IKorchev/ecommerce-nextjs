import Image from "next/image"
import { useState } from "react"
import { useStore } from "../contexts/StoreContext"

const CartItem = ({ id, price, image, quantity, title, description }) => {
  const { state, dispatch } = useStore()

  return (
    <div className='flex mt-5 items-center border p-5'>
      <Image src={image} layout='fixed' width='60' height='60' alt='image' />
      <div className='ml-5'>
        <h2 className='text-lg font-semibold w-48'>{title}</h2>
        <div className='flex justify-between mt-5'>
          <p>{price}</p>
          <button
            className='rounded-lg text-lg w-5 font-semibold bg-gray-200 border'
            onClick={(e) => {
              e.preventDefault()
              dispatch({
                type: "ADD_ITEM_QUANTITY",
                payload: { id, quantity, title, image, price, description },
              })
            }}>
            +
          </button>
          <p>{quantity}</p>
          <button
            className='rounded-lg text-lg w-5 font-semibold bg-gray-200 border'
            onClick={(e) => {
              e.preventDefault()
              quantity >= 2
                ? dispatch({
                    type: "REDUCE_ITEM_QUANTITY",
                    payload: { id, quantity, title, image, price, description },
                  })
                : dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: { id, quantity, title, image, price, description },
                  })
            }}>
            -
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              dispatch({ type: "REMOVE_FROM_CART", payload: { id, price } })
            }}>
            remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
