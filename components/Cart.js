import { useEffect, useState } from "react"
import { useStore } from "../contexts/StoreContext"
import CartItem from "./CartItem"
import ArrowRightIcon from "@heroicons/react/solid/ArrowRightIcon"
import handleCartCheckout from "../utils/handleCheckout"

const Cart = () => {
  const { state, cartIsShown, cartShowHandler } = useStore()
  const [price, setPrice] = useState(0)

  const handleCheckout = async (e) => {
    e.preventDefault()
    handleCartCheckout(state.items)
  }
  useEffect(() => {
    // get prices for whole cart
    const prices = state.items
      .map((el) => el.quantity * el.price)
      ?.reduce((a, b) => a + b, 0)
    setPrice(prices)
  }, [state])
  return (
    <div
      className={`cart transform transition duration-400 px-0 w-96 ${
        !cartIsShown ? "translate-x-full" : "-translate-x-full"
      } `}>
      <div className='flex flex-col items-center w-full px-0'>
        <button
          className='absolute border p-3 top-5 translate duration-200 hover:bg-gray-200 rounded-full  right-5'
          onClick={cartShowHandler}>
          <ArrowRightIcon className='h-5 w-5' fill='black' />
        </button>
        {state.items?.length === 0 ? (
          <h1 className='text-lg text-center'>You have nothing in your cart</h1>
        ) : (
          <h1 className='text-lg text-center mb-12'>Items in your cart</h1>
        )}
        {state.items.length > 0 &&
          state.items?.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              price={el.price}
              image={el.image}
              quantity={el.quantity}
              title={el.title}
            />
          ))}

        <p className='mt-5 text-xl font-semibold'>Cart total: ${price.toFixed(2)}</p>

        <button
          onClick={handleCheckout}
          className='font-semibold mt-8 bg-green-800 p-3 rounded-md translate hover:focus:bg-green-700 text-xl text-white'
          type='submit'
          role='link'>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
