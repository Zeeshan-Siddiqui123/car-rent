import React from 'react'
import { FaCalendarAlt, FaCar, FaCarSide } from 'react-icons/fa'
import { FaHeadphonesSimple } from 'react-icons/fa6'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div>
      <div className='flex items-center justify-between h-[650px]'>
        <div className='flex items-start flex-col ml-[150px] -mt-[10px]'>
          <p className='text-white'>Search hundreds of rental Car</p>
          <h1 className='text-white text-5xl font-bold'>Car rental in <span className='text-[#5277ba]'>PAKISTAN</span></h1>
          <div className='flex flex-row items-center gap-4'>
            <div className='flex flex-row gap-1 items-center'>
              <IoCheckmarkDoneSharp color='#5277ba' size={30} />
              <p className='text-white text-lg'>No hidden costs</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <IoCheckmarkDoneSharp color='#5277ba' size={30} />
              <p className='text-white text-lg'>24/7 Support</p>
            </div>
            <div className='flex flex-row gap-1 items-center'>
              <IoCheckmarkDoneSharp color='#5277ba' size={30} />
              <p className='text-white text-lg'>Free Cancellation</p>
            </div>
          </div>
          <p className='text-white text-xl mt-5'>Seamless rentals, unforgettable journeys – wherever <br />life takes you. Key to Your Next Adventure – Drive with Us!</p>
        </div>
        <div className='mt-[80px]'><img src="https://carentoae.com/wp-content/uploads/2024/03/hero-top-12.png" alt="" className='w-[650px]' /></div>
      </div>
      <div className='w-full h-[500px] bg-[#ffffff1a] flex flex-col items-start'>
        <div className='ml-10 mt-16'>
          <p className='text-[#5277ba] text-2xl font-bold'>Plan Your Trip Now</p>
          <p className="text-white text-4xl font-bold">Quick & Easy Car Rental</p>
        </div>
        <div className='flex items-center flex-row gap-5 ml-10 mt-12 flex-wrap'>
          <div className='flex flex-col items-start gap-3'>
            <div className='w-[100px] h-[100px] rounded-md bg-slate-800 flex items-center justify-center'><FaCar size={50} color='#c5384b' />
            </div>
            <p className='text-white font-bold text-xl'>Select Car</p>
            <p className='text-white'>To contribute positive change and <br />achieve our sustainaibility goals with many <br />extraordinary</p>
          </div>
          <div className='flex flex-col items-start gap-3'>
            <div className='w-[100px] h-[100px] rounded-md bg-slate-800 flex items-center justify-center'><FaHeadphonesSimple size={50} color='orange' />
            </div>
            <p className='text-white font-bold text-xl'>Contact Operator</p>
            <p className='text-white'>To contribute positive change and <br />achieve our sustainaibility goals with many <br />extraordinary</p>
          </div>
          <div className='flex flex-col items-start gap-3'>
            <div className='w-[100px] h-[100px] rounded-md bg-slate-800 flex items-center justify-center'><FaCalendarAlt size={50} color='orange' />
            </div>
            <p className='text-white font-bold text-xl'>Book Your Car</p>
            <p className='text-white'>To contribute positive change and <br />achieve our sustainaibility goals with many <br />extraordinary</p>
          </div>
          <div className='flex flex-col items-start gap-3'>
            <div className='w-[100px] h-[100px] rounded-md bg-slate-800 flex items-center justify-center'><FaCarSide size={50} color='#c5384b' />
            </div>
            <p className='text-white font-bold text-xl'>Let's Drive</p>
            <p className='text-white'>To contribute positive change and <br />achieve our sustainaibility goals with many <br />extraordinary</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around h-[300px] flex-wrap">
        <div>
          <h1 className='text-white'>Exotic Car Rental In <span className='text-[#5277ba]'>Pakistan</span> <br /> Service Available</h1>
          <p className='text-slate-300'>We offer the world's finest and most wanted sports car rental, luxury car rental, Supercar rental, and SUV <br /> rental services in the city for all requirements.</p>
        </div>
        <div>
          <Link to='/rent-a-car'><button className='text-white bg-[#5277ba] px-4 py-3'>Book Your Car Today!</button></Link>
        </div>
      </div>
      <div className='bg-img w-full h-[400px] flex items-center justify-center'>
        <div className='flex items-center flex-col'>
          <h1 className='text-white'>Same-Day Delivery in UAE</h1>
          <p className='text-slate-300 text-center'>At Carento, we specialize in fulfilling all rent a car in UAE  <br />requirements. We will ensure same-day delivery for private <br /> and business rent a car requirements.</p>
          <Link to='/rent-a-car'><button className='text-white bg-[#5277ba] px-4 py-3 mt-4'>Book Your Car Today!</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Index
