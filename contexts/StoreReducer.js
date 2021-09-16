const reducer = (state, action) => {
  const item = state.items?.find((el) => el.id === action.payload.id)

  switch (action.type) {
    case "ADD_TO_CART":
      if (!item) {
        return {
          items: [...state.items, action.payload],
        }
      } else {
        return state
      }
    case "REMOVE_FROM_CART":
      return {
        items: state.items.filter((el) => el.id !== item.id),
      }
    case "REDUCE_ITEM_QUANTITY":
      const decreasedItemQuantityArray = state.items.map((el) => {
        return action.payload.id === el.id ? { ...el, quantity: el.quantity - 1 } : el
      })
      return {
        items: decreasedItemQuantityArray,
      }
    case "ADD_ITEM_QUANTITY":
      const increasedItemQuantityArray = state.items.map((el) => {
        return action.payload.id === el.id
          ? { ...el, quantity: parseInt(el.quantity + 1) }
          : el
      })
      return {
        items: increasedItemQuantityArray,
      }
    default:
      return state
  }
}

export default reducer
