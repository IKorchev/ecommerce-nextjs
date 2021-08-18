import { useEffect, useState } from "react"
import { useStore } from "../contexts/StoreContext"
import CartItem from "./CartItem"

const Cart = ({ cartIsShown }) => {
  const { state, dispatch } = useStore()
  const [price, setPrice] = useState(0)
  const [array, setArray] = useState(state.items)
  useEffect(() => {
    const prices = state.items
      .map((el) => el.quantity * el.price)
      ?.reduce((a, b) => a + b, 0)
    setPrice(prices)
    setArray(state.items)
  }, [state])
  return (
    <div
      className={`${!cartIsShown ? "hidden" : ""} w-96 cart absolute  right-0
           bg-white text-black border shadow-lg p-5 overflow-auto`}>
      {state.items?.length === 0 ? (
        <h1 className='text-lg text-center'>You have nothing in your cart</h1>
      ) : (
        <h1 className='text-lg text-center mb-12'>Items in your cart</h1>
      )}
      {state.items.length > 0 &&
        state.items.map((el) => (
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
    </div>
  )
}

export default Cart
