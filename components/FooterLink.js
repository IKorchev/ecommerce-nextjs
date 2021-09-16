import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon"
import useWindowSize from "../utils/useWindowSize"
const FooterLink = ({ title, linksArray }) => {
  const [active, setActive] = useState(false)
  const linksRef = useRef()
  const size = useWindowSize()

  // Open and close links container when active state changes
  useEffect(() => {
    const linksAnimation = () => {
      const ref = linksRef.current
      active
        ? gsap.to(ref, {
            maxHeight: `${ref.scrollHeight}px`,
            duration: 0.1,
          })
        : gsap.to(ref, {
            maxHeight: "0%",
            duration: 1,
          })
    }
    linksAnimation()
  }, [active])

  // When window is resized make sure the height is right on all screen sizes
  useEffect(() => {
    size.width > 1024
      ? (linksRef.current.style.maxHeight = "100%")
      : (linksRef.current.style.maxHeight = "0% !important")
  }, [size])
  return (
    <div className='border-b-2 border-black lg:border-0 mt-2'>
      <h1 className='font-semibold text-lg mb-2 hidden lg:block'>{title}</h1>
      <button
        className='font-semibold text-lg lg:hidden py-2 flex w-full'
        onClick={(e) => {
          e.preventDefault()
          setActive((state) => !state)
        }}>
        <span className='mr-auto'>{title}</span>
        <ChevronDownIcon
          className={`h-5 transition duration-200 ${
            active ? "transform rotate-180" : ""
          }`}
        />
      </button>

      <ul
        ref={linksRef}
        className={`flex-col max-h-0 md:max-h-100 lg:flex pb-5 ${
          active ? "block" : "hidden"
        }`}>
        {linksArray.map((el) => (
          <li key={el}>
            <a href='' className='text-gray-600 py-2 lg:my-0 hover:text-black'>
              {el}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLink
