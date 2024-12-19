import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, message } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_BASE_URL = 'https://portfolio-server-jopl.onrender.com';

const Book = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product details.');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center">
        <h2>No product found.</h2>
      </div>
    );
  }

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="img6 w-full h-[350px] flex items-center gap-2 mt-10">
        <img
          src="https://carentoae.com/wp-content/uploads/2024/02/Audi-Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute ml-16 mt-[250px]">
          <Link to="/" className="text-white mt-2">
            Home/
          </Link>
          <Link to="/rent-a-car" className="text-white mt-2">
            Go Back/
          </Link>
          <h1 className="text-2xl font-bold mb-2 text-white">{product.description}</h1>
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap-reverse mt-10">
        <form className="flex flex-col gap-3 justify-center bg-[#f5f5f5] px-10 py-5 shadow-md">
          <div className="bg-[#5277ba] px-10 py-8 flex items-center flex-col gap-2">
            <p className="text-white font-bold text-lg">Rs: {product.price} per day</p>
            <p className="text-white font-bold text-lg">Rs: {Math.round(product.price / 24)} per hour</p>
          </div>

          <label className="text-black mt-4">PickUp Address</label>
          <input type="text" placeholder="Pickup Address" className="px-10 py-4" />

          <label className="text-black">PickUp Date</label>
          <input type="datetime-local" className="px-10 py-4" />

          <label className="text-black">Drop Off Address</label>
          <input type="text" placeholder="Drop Off Address" className="px-10 py-4" />

          <label className="text-black">Drop Off Date</label>
          <input type="datetime-local" className="px-10 py-4" />
        </form>

        {/* Slider Section */}
        <div className="w-[600px]">
          <Slider {...sliderSettings}>
            <div>
              <img src={product.image} alt={product.description} className="w-full h-auto" />
            </div>
            <div>
              <img src={product.image2} alt={product.description} className="w-full h-auto" />
            </div>
            <div>
              <img src={product.image3} alt={product.description} className="w-full h-auto" />
            </div>
            <div>
              <img src={product.image4} alt={product.description} className="w-full h-auto" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col gap-5 mt-4">
        <p className="text-white text-2xl text-center">About this Car</p>
        <p className="text-white text-2xl text-center">Rent a {product.description} in Pakistan</p>
        <p className="text-white text-2xl text-center">{product.description} Rental In Pakistan</p>
        <p className="text-slate-400 text-center mx-10">
          Rent and drive this {product.description}, Pakistan for {product.price} rupees per day.
          Rental cost includes basic comprehensive insurance. A security deposit of Rs 2,500 is
          required. Contact Time Out Rent a Car directly for bookings and inquiries.
        </p>
        <p className="text-white text-2xl text-center">You are eligible to rent a car across the Pakistan provided you have <br /> the mentioned documents valid with you:</p><hr />
        <div className='flex flex-col items-center justify-center'>
          <p className="text-slate-400 font-bold text-xl ">For Pakistan Residents</p>
          
            <p className='text-white'>Pakistan driving License</p>
            <p className="text-white">Nation Identity Card</p>
          
        </div><hr />
        <div className='flex flex-col items-center justify-center'>
          <p className="text-slate-400 font-bold text-xl ">For Tourists Visiting The Pakistan</p>
        
            <p className='text-white'>Passport</p>
            <p className="text-white">Visit Visa</p>
            <p className="text-white">Home Country Driving License</p>
            <p className="text-white">International Driving Permit (IDP)</p>
          
        </div><hr />
        <p className='text-center text-slate-400'>Visitors from the GCC, US, UK, Canada, Europe, and certain other countries <br /> can drive with their home country’s driving license,  without needing an IDP. <br /> Find out if your country’s driving license is valid in the Pakistan</p>
      </div>
    </div>
  );
};

export default Book;
