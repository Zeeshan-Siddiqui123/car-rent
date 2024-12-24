import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, Modal } from 'antd';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_BASE_URL = 'https://portfolio-server-jopl.onrender.com';

const Book = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [formData, setFormData] = useState({
    pickupAddress: '',
    pickupDate: '',
    dropOffAddress: '',
    dropOffDate: '',
  });

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
      <div className="flex items-center justify-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>{error}</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
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

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setModalVisible(true); // Show modal on form submission
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset form and close modal
  const handleOk = () => {
    setModalVisible(false);
    setFormData({
      pickupAddress: '',
      pickupDate: '',
      dropOffAddress: '',
      dropOffDate: '',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[350px] flex items-center mt-10">
        <img
          src="https://carentoae.com/wp-content/uploads/2024/02/Audi-Banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-4 md:left-16 bottom-8 text-white space-y-2">
          <Link to="/" className="text-sm md:text-base">
            Home /
          </Link>
          <Link to="/rent-a-car" className="text-sm md:text-base">
            Go Back /
          </Link>
          <h1 className="text-lg md:text-2xl font-bold">{product.description}</h1>
        </div>
      </div>

      {/* Form and Slider Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap-reverse mt-10 px-4">
        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-[#f5f5f5] px-6 py-4 shadow-md w-full max-w-md">
          <div className="bg-[#5277ba] px-8 py-6 flex items-center flex-col gap-2">
            <p className="text-white font-bold text-base md:text-lg">Rs: {product.price} per day</p>
            <p className="text-white font-bold text-base md:text-lg">Rs: {Math.round(product.price / 24)} per hour</p>
          </div>

          <label className="text-black mt-4">PickUp Address</label>
          <input
            type="text"
            name="pickupAddress"
            value={formData.pickupAddress}
            onChange={handleChange}
            placeholder="Pickup Address"
            className="px-4 py-2 border rounded-md"
            required
          />

          <label className="text-black">PickUp Date</label>
          <input
            type="datetime-local"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md"
            required
          />

          <label className="text-black">Drop Off Address</label>
          <input
            type="text"
            name="dropOffAddress"
            value={formData.dropOffAddress}
            onChange={handleChange}
            placeholder="Drop Off Address"
            className="px-4 py-2 border rounded-md"
            required
          />

          <label className="text-black">Drop Off Date</label>
          <input
            type="datetime-local"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md"
            required
          />

          <button type="submit" className="text-white bg-[#5277ba] px-4 py-2 rounded-md hover:bg-blue-700">
            Book Now
          </button>
        </form>

        {/* Slider Section */}
        <div className="w-full max-w-lg">
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

      {/* Modal for Confirmation */}
      <Modal
        title="Booking Confirmed"
        visible={modalVisible}
        onOk={handleOk} // Reset form on OK
        onCancel={() => setModalVisible(false)}
        okText="OK"
        cancelText="Cancel"
      >
        <p>Your booking has been successfully submitted! Thanks Foxr Choosing Us.</p>
      </Modal>
    </div>
  );
};

export default Book;
