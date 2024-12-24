import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Works = () => {
  return (
    <div className="mt-[80px]">
      {/* Header Section */}
      <div className="bg-img2 w-full h-[300px] flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl">The Process</h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-wrap items-center justify-center gap-10 w-full mt-8 px-4">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://carentoae.com/wp-content/uploads/2024/02/1688850463requirementsideimg.webp"
            alt=""
            className="w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl">
            Tailor Your Car Rental in Pakistan Plan to <br /> Your Specific Requirement
          </h1>
          <p className="text-white text-sm md:text-base">
            Faster Rent a Car is a professional rent a car in Pakistan service provider for all
            requirements. We offer tailored rental plans and services for specific preferences. Our
            business, private, wedding, and desert safari car rental in Dubai services are
            available tailored to your requirements. We offer:
          </p>

          {/* Feature List */}
          {[
            'Hourly car rental and chauffeur service for airport connections and desert safari',
            'Full-day business, private, and wedding car rental services in your city',
            'Full weekend and also full week exotic car rental in Pakistan services',
            'Same-day delivery and advance booking are available for all requirements',
            'Affordable, fast car rental plans are available any day of the week, all year',
          ].map((item, index) => (
            <div key={index} className="flex gap-2 items-start">
              <FaCheck color="#5277ba" />
              <p className="text-white text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Requirements Section */}
      <div className="bg-img3 w-full mt-16 py-10 px-4">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-yellow-300 text-lg md:text-xl font-bold">Clients Requirements</p>
          <p className="text-yellow-800 text-2xl md:text-4xl font-semibold">
            Documents Required to Rent a Car in Pakistan
          </p>
          <p className="text-yellow-700 text-sm md:text-base max-w-3xl">
            For the best touring experience in Dubai and around the UAE, car rental is the best
            option. Public transport and other options will not allow you to enjoy all the
            attractions here in the desert city. Also, Faster Rent a Car offers tourists and also
            locals in the city to rent their favourite sports cars, SUVs and luxury cars for all
            kinds of requirements. Documents required for renting a car in Pakistan are as follows:
          </p>

          {/* Requirements List */}
          <div className="flex flex-wrap items-start justify-center gap-10 w-full mt-6">
            {/* Residents' Requirements */}
            <div className="bg-white w-full md:w-[300px] p-5 rounded-md shadow-md">
              <p className="text-white font-bold px-4 py-3 bg-[#5277ba] rounded">
                Documents Required For Pakistan Residents
              </p>
              {[
                'Valid Pakistan Driving License',
                'Nation Identity Card (NIC)',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 mt-3">
                  <div className="rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center justify-center">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>

            {/* Middle Section */}
            <p className="text-center text-white font-bold text-sm md:text-base">
              Tourists from some countries including the <br /> rest of the GCC, USA, UK, Canada,
              Europe, <br /> and a few others can rent luxury cars without <br /> an international
              driving permit. Also, tourists <br /> from some countries will need international{' '}
              <br /> driving permits to drive and rent cars <br /> in Pakistan.
            </p>

            {/* Tourists' Requirements */}
            <div className="bg-white w-full md:w-[300px] p-5 rounded-md shadow-md">
              <p className="text-white font-bold px-4 py-3 bg-[#5277ba] rounded">
                Documents Required for Tourists in Pakistan
              </p>
              {[
                'Valid Passport',
                'Valid Pakistan Visit Visa',
                'Airport Entry Stamp May Be Asked',
                'Valid Home Country Driving License',
                'International Driving Permit',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 mt-3">
                  <div className="rounded-full bg-[#5277ba] w-[15px] h-[15px] flex items-center justify-center">
                    <FaCheck color="white" size={10} />
                  </div>
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
