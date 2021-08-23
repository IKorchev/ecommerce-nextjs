import gsap from "gsap"
import Image from "next/image"
import Image1 from "../assets/clothes-1.jpg"
import Image2 from "../assets/clothes-2.jpg"
import Image3 from "../assets/clothes-3.jpg"
const data = [Image1, Image2, Image3]

const Hero = () => {
  return (
    <>
      <div className='flex flex-col h-80 lg:h-100  w-max mt-14 relative image'>
        <div className='image relative transform w-screen h-100'>
          <Image src={Image1} layout='fill' objectFit='cover' alt='clothes collection' />
        </div>
        <div className='absolute w-full h-full grid place-items-center'>
          <div className='inline-flex flex-col py-8 px-12 lg:px-24 h-1/2 bg-black justify-center items-center'>
            <h1 className='text-5xl text-shadow-lg font-bold z-10 text-white bg-black text-center'>
              Shop now
            </h1>
            <h1 className='text-2xl text-shadow-lg font-bold z-10 mt-5 text-white bg-black text-center'>
              Shop now
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
