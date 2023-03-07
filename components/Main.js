import CategorySection from './CategorySection';
const categories = [
  'smartphones',
  'laptops',
  'fragrances',
  'skincare',
  'groceries',
  'home-decoration',
  'furniture',
  'tops',
  'womens-dresses',
  'womens-shoes',
  'mens-shirts',
  'mens-shoes',
  'mens-watches',
  'womens-watches',
  'womens-bags',
  'womens-jewellery',
  'sunglasses',
  'automotive',
  'motorcycle',
  'lighting',
];

const Main = ({ data }) => {
  return (
    <main className='overflow-hidden px-3 md:px-0 pt-5 pb-24 container'>
      {categories.map((el) => {
        const products = data.filter((item) => item.category === el);
        return products.length ? <CategorySection key={el} data={products} title={el.replace('-', '')} /> : null;
      })}
    </main>
  );
};

export default Main;
