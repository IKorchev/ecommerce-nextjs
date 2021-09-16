import CategorySection from "./CategorySection"

const Main = ({ data }) => {
  const mensClothing = data.filter((item) => item.category === "men's clothing")
  const jewelery = data.filter((item) => item.category === "jewelery")
  const electronics = data.filter((item) => item.category === "electronics")
  const womensClothing = data.filter((item) => item.category === "women's clothing")
  return (
    <main className='overflow-hidden px-3 md:px-0 pt-5 pb-24 container'>
      <CategorySection data={mensClothing} title="Men's Clothing" />
      <CategorySection data={womensClothing} title="Women's Clothing" />
      <CategorySection data={electronics} title='Electronics' />
      <CategorySection data={jewelery} title='Jewelery' />
    </main>
  )
}

export default Main
