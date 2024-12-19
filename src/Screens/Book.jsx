import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, message } from 'antd';

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

        <div>
          <img src={product.image} alt={product.description} className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};
export default Book