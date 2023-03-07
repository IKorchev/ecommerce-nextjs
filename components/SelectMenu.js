import React from "react"

const SelectMenu = ({ setQuantity, options }) => {
  const optionsArr = options || [1, 2, 3, 4, 5, 6, 7]

  return (
    <select
      className='cursor-pointer pr-4 pl-2 border border-gray-500 md:py-1 p-2 rounded-md'
      onChange={(e) => setQuantity(parseInt(e.target.value))}>
      {optionsArr.map((el) => {
        return (
          <option className='text-lg py-5' key={el} value={el}>
            {el}
          </option>
        )
      })}
    </select>
  )
}

export default SelectMenu
