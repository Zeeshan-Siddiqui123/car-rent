import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-img4 w-full h-[300px] flex items-center justify-center'>
        <h1 className='text-white text-5xl'>About Us</h1>
      </div>
      <div className="flex items-center justify-center flex-wrap flex-col mt-16">
        <h1 className='text-white font-bold text-4xl'>Why Choose Us</h1>
        <p className='text-slate-300 text-center'>We have a wide range of car brands to choose from at competitive rates. Faster Rent a Car Top providing Sports Car, Luxury car and Supercar for rent. We are <br /> proud to offer a public fleet of premium cars for rent today, all of which are available to rent for a period to suit your needs.
        </p>
        <img src="https://carentoae.com/wp-content/uploads/2024/02/1692967754aboutsec1image.webp" alt="" className='mt-10'/>
        <h1 className="text-white font-bold text-4xl">Who we are?</h1>
        <p className="text-slate-300 text-center">Ever since it was launched in 1999, the agency consisting of two leading car rental services (FASTER & VIP) has been focusing over the years on core <br /> principles such as excellent value for money and strong customer support. The Dubai-based company has seen tremendous growth across the Emirates and it <br /> managed to become a leader in the field due to its determination and hard-working personnel.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap flex-col mt-16">
        <p className="text-[#5277ba] text-xl font-semibold">OUR SERVICES</p>
        <h1 className='text-white font-bold text-4xl'>Services We Offer</h1>
        <div className="flex flex-wrap justify-around items-center"></div>
      </div>
    </div>
  )
}

export default About
