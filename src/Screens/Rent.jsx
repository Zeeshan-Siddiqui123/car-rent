import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import Loader from '../Components/Loader';
import Card from '../Components/Card';

const API_BASE_URL = 'https://portfolio-server-jopl.onrender.com';

const Rent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Failed to fetch products.');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        message.error('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className='flex items-center justify-center h-screen'><Loader /></div>;
  }

  return (
    <div className='mt-16'>
      <h4 className='text-center text-[#5277ba] font-bold mb-2'>Rent A Car</h4>
      <h1 className='text-center text-white font-bold mb-6'>Our Vehicles Listing</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rent;
