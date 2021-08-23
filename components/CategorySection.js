import ItemCard from "./ItemCard"

const CategorySection = ({ data, title }) => {
  return (
    <section className='mt-12'>
      <h1 className='text-2xl px-1 md:px-12 mb-5 font-bold font-body'>{title}</h1>
      <hr />
      <div className='py-5 px-1 md:px-12 flex gap-5 w-full overflow-auto scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin'>
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
      </div>
    </section>
  )
}

export default CategorySection
