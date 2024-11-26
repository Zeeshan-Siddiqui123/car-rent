import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Works = () => {
  return (
    <div className='mt-[80px]'>
      <div className='bg-img2 w-full h-[300px] flex items-center justify-center'>
        <h1 className='text-white text-5xl'>The Process</h1>
      </div>
      <div className="flex items-center justify-around flex-wrap w-full h-[500px]">
        <div>
          <img src="https://carentoae.com/wp-content/uploads/2024/02/1688850463requirementsideimg.webp" alt="" />
        </div>
        <div className='flex flex-col gap-3 items-start'>
          <h1 className='text-white'>Tailor Your Car Rental in Pakistan Plan to <br /> Your Specific Requirement</h1>
          <p className='text-white'>Faster Rent a Car is a professional rent a car in Pakistan service provider for all <br /> requirements. We offer tailored rental plans and services for specific <br /> preferences. Our business, private, wedding, and desert safari car rental in <br /> Dubai services are available tailored to your requirements. We offer:</p>
          <div className='flex gap-1 items-center'>
            <FaCheck color='#5277ba' />
            <p className='text-white'>Hourly car rental and chauffeur service for airport connections and desert <br /> safari</p>
          </div>
          <div className='flex gap-1 items-center'>
            <FaCheck color='#5277ba' />
            <p className='text-white'>Full-day business, private, and wedding car rental services in your city</p>
          </div>
          <div className='flex gap-1 items-center'>
            <FaCheck color='#5277ba' />
            <p className='text-white'>Full weekend and also full week exotic car rental in Pakistan services</p>
          </div>
          <div className='flex gap-1 items-center'>
            <FaCheck color='#5277ba' />
            <p className='text-white'>Same-day delivery and advance booking are available for all requirements
            </p>
          </div>
          <div className='flex gap-1 items-center'>
            <FaCheck color='#5277ba' />
            <p className='text-white'>Affordable, fast car rental plans are available any day of the week, all year
            </p>
          </div>
        </div>
      </div>
      <div className="bg-img3 w-full h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <p className='text-yellow-300 text-xl font-bold mt-4 text-center'>Clients Requirements</p>
          <p className='text-yellow-800 font-semibold text-5xl text-center '>Documents Required to Rent a Car in Pakistan</p>
          <p className='text-yellow-700 font-thin text-center'>For the best touring experience in Dubai and around the UAE, car rental is the best option. Public transport and other options will not allow you to enjoy all the <br /> attractions here in the desert city. Also, Faster Rent a Car offers tourists and also locals in the city to rent their favourite sports cars, SUVs and luxury cars for <br /> all kinds of requirements. Documents required for renting a car in Pakistan are as follows:</p>
          <div className='flex items-center justify-around flex-wrap flex-row gap-3'>
            <div className='bg-white h-[280px] flex flex-col gap-3 rounded-md'>

              <p className='text-white font-bold px-4 py-4 bg-[#5277ba] mt-5 ml-3 mr-3'>Documents Required For Pakistan  Residents</p>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Valid Pakistan Driving License</p>
              </div>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Nation Identity Card (NIC)</p>
              </div>

            </div>
            <p className='text-center text-white font-bold'>
              Tourists from some countries including the <br /> rest of the GCC, USA, UK, Canada, Europe, <br /> and a few others can rent luxury cars without <br /> an international driving permit. Also, tourists <br /> from some countries will need international <br /> driving permits to drive and rent cars <br /> in Pakistan.
            </p>
            <div className='bg-white h-[280px] flex flex-col gap-3 rounded-md'>

              <p className='text-white font-bold px-4 py-4 bg-[#5277ba] mt-5 ml-3 mr-3'>Documents Required for Tourists in Pakistan
              </p>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Valid Passport
                </p>
              </div>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Valid Pakistan Visit Visa
                </p>
              </div><div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Airport Entry Stamp May Be Asked
                </p>
              </div>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>Valid Home Country Driving License
                </p>
              </div>
              <div className='flex gap-1 ml-3'>
                <div className='rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center'><FaCheck color='white' /></div>
                <p>International Driving Permit
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
