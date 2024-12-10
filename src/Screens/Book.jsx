import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Spin, message, Button } from 'antd';
import { LuBus } from 'react-icons/lu';

const API_BASE_URL = 'https://portfolio-server-jopl.onrender.com';

const Book = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState('');
  const [showOrderButton, setShowOrderButton] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const handleAddressSubmit = () => {
    if (address.trim()) {
      setShowOrderButton(true);
      message.success('Address saved successfully!');
    } else {
      message.error('Please enter a valid address.');
    }
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    message.success('Your order has been placed successfully!');
    setAddress('');
    setShowOrderButton(false);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  if (loading) {
    return <div className='flex items-center justify-center'><Spin size='large' /></div>;
  }

  if (error) {
    return <div className='flex items-center justify-center'><h2>{error}</h2></div>;
  }

  if (!product) {
    return <div className='flex items-center justify-center'><h2>No product found.</h2></div>;
  }

  return (
    <>
    <div>
        <img src="https://carentoae.com/wp-content/uploads/2024/02/Audi-Banner.jpg" alt="" />
        <h1 className='text-2xl font-bold mb-2 text-white'>{product.description}</h1>

    </div>
    <div className='container mx-auto p-4 flex flex-col md:flex-row mt-16'>
      <div className='flex-1'>
        <img
          src={product.image || 'https://via.placeholder.com/400x450'} // Fallback image
          alt={product.title || 'Product'}
          className='w-[400px] h-[450px] rounded-lg shadow-lg'
        />
      </div>
      <div className='flex-1 p-4'>
        <h1 className='text-2xl font-bold mb-2 text-white'>{product.title}</h1>
        <p className='text-lg mb-2 text-white'><strong>Price:</strong> ${product.price}</p>
        <p className='text-md mb-2 text-white'><strong>Description:</strong> {product.description}</p>
        {!orderPlaced && (
          <div className='mt-4'>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Enter your address'
              className='border p-2 rounded w-full text-white'
            />
          </div>
        )}
        <Button type='primary' className='mt-4' onClick={handleAddressSubmit}>
          <LuBus size={20} /> <span className='ml-2'>Order Now</span>
        </Button>
        {showOrderButton && (
          <Button type='primary' className='mt-4 bg-green-500 text-white' onClick={placeOrder}>
            Place Order
          </Button>
        )}
        {orderPlaced && <p className='mt-4 text-green-500'>Your order has been placed successfully!</p>}
      </div>
      <Button className='mt-4'>
        <Link to='/rent-a-car'>Go Back</Link>
      </Button>
    </div>
    </>
  );
};

export default Book;
