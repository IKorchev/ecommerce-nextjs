import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ChevronDownIcon from "@heroicons/react/solid/ChevronDownIcon"
import useWindowSize from "../utils/useWindowSize"
import Link from "next/link"
import { debounce } from "lodash"
const FooterLink = ({ title, linksArray }) => {
  const [active, setActive] = useState(false)
  const linksRef = useRef()
  const size = useWindowSize()

  // Open and close links container when active state changes
  useEffect(() => {
    ;(() => {
      const ref = linksRef.current
      active
        ? gsap.to(ref, {
            height: "auto",
            duration: 0.3,
          })
        : gsap.to(ref, {
            height: "0px",
            duration: 0.3,
          })
    })()
  }, [active])

  useEffect(() => {
    size.width > 1024
      ? (linksRef.current.style.height = "auto")
      : (linksRef.current.style.height = "0px !important")
  }, [size])

  return (
    <div className='border-b-2 border-black lg:border-0 mt-2'>
      <h1 className='font-semibold text-lg mb-2 hidden lg:block'>{title}</h1>
      <button
        className='font-semibold text-lg lg:hidden py-2 flex w-full'
        onClick={() => setActive((state) => !state)}>
        <span className='mr-auto'>{title}</span>
        <ChevronDownIcon className={`h-5 transition duration-200 ${active ? "transform rotate-180" : ""}`} />
      </button>

      <ul ref={linksRef} className={`flex-col lg:flex overflow-hidden`}>
        {linksArray.map((el) => (
          <li className='py-2 lg:py-0' key={el}>
            <Link passHref href='/'>
              <a className='block md:inline cursor-pointer hover:underline'>{el}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLink
