import Head from "next/head"
import "tailwindcss/tailwind.css"
import Cart from "../components/Cart"
import Hero from "../components/Hero"
import Main from "../components/Main"
import Navbar from "../components/Navbar"
export default function Home({ products }) {
  return (
    <div className=' relative overflow-x-hidden z-20'>
      <Head>
        <title>Ecommerce Shop | Home</title>
        <meta name='description' content='Ecommerce Shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Cart />
      <header className='z-0'>
        <Navbar />
        <Hero />
      </header>
      <div className=' container mx-auto'>
        <Main data={products} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  )

  return {
    props: {
      products,
    },
  }
}
