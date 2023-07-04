import React from 'react'

const Button = ({text}) => {
  return (
    <div className=' border-2 border-sky-500 cursor-pointer  px-5 py-3 rounded-md text-md capitalize hover:bg-sky-500  shadow-sm hover:border-2 hover:shadow-sky-500 duration-500'>{text}</div> 
  )
}

export default Button;