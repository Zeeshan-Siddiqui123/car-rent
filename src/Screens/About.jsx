import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-img4 w-full h-[300px] flex items-center justify-center'>
        <h1 className='text-white text-5xl'>About Us</h1>
      </div>
      <div className="flex items-center justify-center flex-wrap flex-col mt-16">
        <h1 className='text-white font-bold text-4xl'>Why Choose Us</h1>
        <p className='text-slate-300 text-center ml-8 mr-8'>We have a wide range of car brands to choose from at competitive rates. Faster Rent a Car Top providing Sports Car, Luxury car and Supercar for rent. We are <br /> proud to offer a public fleet of premium cars for rent today, all of which are available to rent for a period to suit your needs.
        </p>
        <img src="https://carentoae.com/wp-content/uploads/2024/02/1692967754aboutsec1image.webp" alt="" className='mt-10'/>
        <h1 className="text-white font-bold text-4xl">Who we are?</h1>
        <p className="text-slate-300 text-center ml-8 mr-8">Ever since it was launched in 1999, the agency consisting of two leading car rental services (FASTER & VIP) has been focusing over the years on core <br /> principles such as excellent value for money and strong customer support. The Dubai-based company has seen tremendous growth across the Emirates and it <br /> managed to become a leader in the field due to its determination and hard-working personnel.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap flex-col mt-16">
        <p className="text-[#5277ba] text-xl font-semibold">OUR SERVICES</p>
        <h1 className='text-white font-bold text-4xl'>Services We Offer</h1>
        <div className="flex flex-wrap justify-center gap-3 items-center">
          <div className="flex items-start justify-evenly flex-col w-[360px] h-[370px] border">
            <img src="https://listing.maxwheelswp.com/wp-content/uploads/2021/04/oil.png" alt="" className='ml-3'/>
            <p className='text-white font-semibold text-xl ml-3'>Private Car Rental in Pakistan</p>
            <p className='text-slate-300 ml-3'>We offer private car hire in Pakistan service <br /> for all requirements. Hire a luxury car, sports car or SUV any day of the week to make your <br /> trips across Pakistan more exciting and convenient. Call us today to book your car rental <br /> and enjoy your ride.</p>
          </div>
          <div className="flex items-start justify-evenly flex-col w-[360px] h-[370px] border">
            <img src="https://listing.maxwheelswp.com/wp-content/uploads/2021/04/car-ss.png" alt="" className='ml-3'/>
            <p className='text-white font-semibold text-xl ml-3'>Rent a Car in Pakistan for Buisness</p>
            <p className='text-slate-300 ml-3'>Faster Rent a Car offers business car <br /> rental service in Pakistan, any day of the <br /> week, all year. Get the best Rolls Royce <br /> hire, Mercedes S500 rental or any other <br /> business rent a car in Pakistan service with a <br /> chauffeur. Call us now to find out more.</p>
          </div>
          <div className="flex items-start justify-evenly flex-col w-[360px] h-[370px] border">
            <img src="https://listing.maxwheelswp.com/wp-content/uploads/2021/04/automatic-transmission.png" alt="" className='ml-3'/>
            <p className='text-white font-semibold text-xl ml-3'>Wedding and Event Car Rental</p>
            <p className='text-slate-300 ml-3'>We specialise in wedding car rental in <br /> Pakistan services and also rent a car for any <br /> other social or festive events. Get the best <br /> Eid, Christmas, Halloween, Birthday, <br /> Anniversary or weekend car rental service <br /> in your city any time of the year.</p>
          </div>
          <img src="https://listing.maxwheelswp.com/wp-content/uploads/2021/04/re-221.png" alt="" className='mt-5'/>
        </div>
      </div>
    </div>
  )
}

export default About
