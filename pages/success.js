import { useEffect, useRef, useState } from "react"
import PuffLoader from "react-spinners/PuffLoader"
import gsap from "gsap"
import { useRouter } from "next/router"
const Success = () => {
  const [loading, setLoading] = useState(true)
  const ref = useRef()
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout()
  }, [])

  useEffect(() => {
    !loading &&
      gsap.from(ref.current, {
        opacity: 0,
        duration: 2,
      })
  }, [loading])
  return (
    <div className='flex flex-col h-screen w-screen place-items-center justify-center text-center'>
      {loading ? (
        <div className='relative flex items-center justify-center mx-auto w-full h-full my-auto'>
          <PuffLoader loading={loading} color='#c0ffab' size={120} />
        </div>
      ) : (
        <div
          ref={ref}
          className='flex flex-col h-full w-full items-center justify-center text-center'>
          <h1 className='text-3xl font-semibold'>Thank you for your purchase</h1>
          <p className='text-lg mt-8'>
            Please check your inbox for more details on your order
          </p>
          <span className='mt-12 text-xl'>
            <button
              onClick={(e) => {
                e.preventDefault()
                router.push("/")
              }}
              className='font-semibold'>
              Click here{" "}
            </button>{" "}
            to go back to the main page
          </span>
        </div>
      )}
    </div>
  )
}

export default Success
