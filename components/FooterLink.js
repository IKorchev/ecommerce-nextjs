import React, { useState } from "react"

const FooterLink = ({ title, linksArray }) => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <h1 className='font-semibold text-lg mb-2 hidden lg:block'>{title}</h1>
      <button
        className='font-semibold text-lg lg:hidden my-3'
        onClick={(e) => {
          e.preventDefault()
          setActive((state) => !state)
        }}>
        {title}
      </button>

      <ul className={`flex-col lg:flex py-2 ${active ? "flex" : "hidden"} `}>
        {linksArray.map((el) => (
          <li key={el}>
            <a href='' className='text-gray-600 py-2 hover:text-black'>
              {el}
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  )
}

export default FooterLink
