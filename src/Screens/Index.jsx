import React from 'react';
import { FaCalendarAlt, FaCar, FaCarSide } from 'react-icons/fa';
import { FaHeadphonesSimple } from 'react-icons/fa6';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative flex flex-col-reverse mt-10 lg:flex-row items-center justify-between h-auto lg:h-[650px] px-4 lg:px-[150px] py-8'>
        {/* Text Section */}
        <div className='absolute lg:static top-10 mt-10 z-10 text-center lg:text-left'>
          <p className='text-white text-lg'>Search hundreds of rental Cars</p>
          <h1 className='text-white text-3xl lg:text-5xl font-bold mt-2'>
            Car rental in <span className='text-[#5277ba]'>PAKISTAN</span>
          </h1>
          <div className='flex flex-col lg:flex-row gap-4 mt-4 items-center lg:items-start'>
            {[
              "No hidden costs",
              "24/7 Support",
              "Free Cancellation",
            ].map((text) => (
              <div key={text} className='flex items-center gap-2'>
                <IoCheckmarkDoneSharp color='#5277ba' size={25} />
                <p className='text-white text-sm lg:text-lg'>{text}</p>
              </div>
            ))}
          </div>
          <p className='text-white text-sm lg:text-xl mt-5'>
            Seamless rentals, unforgettable journeys – wherever <br />
            life takes you. Key to Your Next Adventure – Drive with Us!
          </p>
        </div>

        {/* Image Section */}
        <div className='relative w-full lg:w-[650px]'>
          <img
            src="https://carentoae.com/wp-content/uploads/2024/03/hero-top-12.png"
            alt="Car Rental"
            className='w-full'
          />
        </div>
      </div>

      {/* Plan Your Trip Section */}
      <div className='w-full h-auto lg:h-[500px] bg-[#ffffff1a] flex flex-col items-start px-4 lg:px-10 py-8'>
        <div>
          <p className='text-[#5277ba] text-lg lg:text-2xl font-bold'>
            Plan Your Trip Now
          </p>
          <p className="text-white text-2xl lg:text-4xl font-bold">
            Quick & Easy Car Rental
          </p>
        </div>
        <div className='flex flex-wrap gap-5 mt-12 justify-center'>
          {[
            { icon: FaCar, color: '#c5384b', title: "Select Car" },
            { icon: FaHeadphonesSimple, color: 'orange', title: "Contact Operator" },
            { icon: FaCalendarAlt, color: 'orange', title: "Book Your Car" },
            { icon: FaCarSide, color: '#c5384b', title: "Let's Drive" },
          ].map(({ icon: Icon, color, title }, index) => (
            <div key={index} className='flex flex-col items-center gap-3'>
              <div className='w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-md bg-slate-800 flex items-center justify-center'>
                <Icon size={40} lg:size={50} color={color} />
              </div>
              <p className='text-white font-bold text-sm lg:text-xl'>{title}</p>
              <p className='text-white text-sm text-center'>
                To contribute positive change and <br />
                achieve our sustainability goals <br />
                with many extraordinary.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Exotic Car Rental Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 h-auto lg:h-[300px] px-4 lg:px-10 py-8">
        <div className='text-center lg:text-left'>
          <h1 className='text-white text-lg lg:text-xl'>
            Exotic Car Rental In <span className='text-[#5277ba]'>Pakistan</span> Service Available
          </h1>
          <p className='text-slate-300 text-sm lg:text-base mt-2'>
            We offer the world's finest and most wanted sports car rental, luxury car rental,
            Supercar rental, and SUV rental services in the city for all requirements.
          </p>
        </div>
        <div>
          <Link to='/rent-a-car'>
            <button className='text-white bg-[#5277ba] px-4 py-3 text-sm lg:text-base'>
              Book Your Car Today!
            </button>
          </Link>
        </div>
      </div>

      {/* Same-Day Delivery Section */}
      <div className='bg-img w-full h-auto lg:h-[400px] flex items-center justify-center px-4 py-8'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-white text-lg lg:text-xl'>
            Same-Day Delivery in Pakistan
          </h1>
          <p className='text-slate-300 text-sm lg:text-base mt-2'>
            At Rento, we specialize in fulfilling all rent a car in Pakistan <br />
            requirements. We will ensure same-day delivery for private <br />
            and business rent a car requirements.
          </p>
          <Link to='/rent-a-car'>
            <button className='text-white bg-[#5277ba] px-4 py-3 mt-4 text-sm lg:text-base'>
              Book Your Car Today!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
