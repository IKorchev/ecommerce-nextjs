import Head from "next/head"
import "tailwindcss/tailwind.css"
import Main from "../components/Main"
import Navbar from "../components/Navbar"

export default function Home({ products }) {
  return (
    <div className=' container mx-auto'>
      <Head>
        <title>Ecommerce Shop | Home</title>
        <meta name='description' content='Ecommerce Shop' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Navbar />
      </header>
      <Main data={products} />
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
