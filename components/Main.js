import ItemCard from "./ItemCard"
import { useStore } from "../contexts/StoreContext"
const Main = ({ data }) => {
  return (
    <main className='flex flex-wrap gap-1 '>
      {data?.map((el) => (
        <ItemCard
          key={el.id}
          id={el.id}
          image={el.image}
          price={el.price}
          title={el.title}
          description={el.description}
        />
      ))}
    </main>
  )
}

export default Main
