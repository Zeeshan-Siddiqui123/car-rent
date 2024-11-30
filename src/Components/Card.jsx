import React from 'react'

const Card = (props) => {
    const {image, name, description, price} = props
  return (
    <div>
      <img src={image} alt="" />
      <p className='text-white'>{description}</p>
      <p className='text-white'>{name}</p>
      <p className='text-white'>Rs.{price}</p>
      <button className='bg-[#5277ba]'>Rent A Car</button>
    </div>
  )
}

export default Card
