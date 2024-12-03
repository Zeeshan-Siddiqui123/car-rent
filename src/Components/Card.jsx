import React from 'react'

const Card = (props) => {
    const {image, name, description, price} = props
  return (
    <div className='w-[350px] flex flex-col gap-2 bg-white rounded-md px-4 py-4 shadow-lg shadow-slate-300 transition-transform transform hover:scale-105'>
      <img src={image} alt="" />
      <p className=''>{name}</p>
      <p className='font-bold text-lg'>{description}</p>
      <p className='text-[#5277ba] font-bold text-lg'>Rs.{price}</p>
      <button className='bg-[#5277ba] text-white px-4 py-3 rounded-md hover:bg-blue-700'>Rent A Car</button>
    </div>
  )
}

export default Card
