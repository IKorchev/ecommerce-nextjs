export const calculatePrices = (array) => {
  let total = 0
  array.forEach((el) => {
    total += el.quantity * el.price
  })
  return total
}
