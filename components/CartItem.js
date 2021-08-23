import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { useStore } from "../contexts/StoreContext"
import PlusIcon from "@heroicons/react/outline/PlusIcon"
import MinusIcon from "@heroicons/react/outline/MinusIcon"

const CartItem = ({ id, price, image, quantity, title, description }) => {
  const itemRef = useRef()
  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      {
        opacity: 1,
        x: 0,
      }
    )
  }, [])
  const { state, dispatch } = useStore()
  const item = { id, quantity, title, image, price, description }
  return (
    <div ref={itemRef} className='cart-item flex mt-5 items-center border rounded-sm p-5'>
      <div className='h-12 w-12 relative'>
        <Image src={image} layout='fill' objectFit='scale-down' alt='image' />
      </div>
      <div className='ml-5'>
        <h2 className='text-md font-semibold w-48'>{title}</h2>
        <div className='flex flex-col justify-between mt-5'>
          <div className='flex mb-4 font-semibold'>
            <p className='flex-grow'>Price:</p>
            <p>${price.toFixed(2)}</p>
          </div>
          <div className='flex font-semibold'>
            <span className='flex-grow'>Quantity:</span>
            <div className='flex border rounded-lg'>
              <button
                className=' w-5 font-semibold'
                onClick={(e) => {
                  e.preventDefault()
                  dispatch({
                    type: "ADD_ITEM_QUANTITY",
                    payload: item,
                  })
                }}>
                <PlusIcon className='h-3 w-3 mx-auto' fill='green' />
              </button>
              <p className='px-2'>{quantity}</p>
              <button
                className='rounded-lg text-lg w-5 font-semibold '
                onClick={(e) => {
                  e.preventDefault()
                  quantity >= 2
                    ? dispatch({
                        type: "REDUCE_ITEM_QUANTITY",
                        payload: item,
                      })
                    : dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item,
                      })
                }}>
                <MinusIcon className='h-3 w-3 mx-auto' />
              </button>
            </div>
          </div>
          <button
            className='font-semibold translate duration-200 hover:bg-red-200
             border border-red-200
             text-red-600 bg-red-100 mt-12 rounded-md inline px-2 ml-auto'
            onClick={(e) => {
              e.preventDefault()
              dispatch({ type: "REMOVE_FROM_CART", payload: { id, price } })
            }}>
            delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
