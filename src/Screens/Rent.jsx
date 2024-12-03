import { message, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card';
import Loader from '../Components/Loader';

const Rent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://portfolio-server-jopl.onrender.com/products');
        console.log('https://portfolio-server-jopl.onrender.com/products');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Await the JSON parsing here
        setProducts(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        message.error('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center' style={{ height: '100vh' }}>
        <Loader/>
      </div>
    );
  }

  return (
    <div className='mt-[100px]'>
        <h4 className="font-bold text-center mb-5 text-[#5277ba]">Rent A Car</h4>
        <h1 className="font-bold text-center mb-5 text-white">Our Vehicles Listing</h1>
      <div className='flex items-center justify-evenly flex-wrap gap-4'>
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.title}
          description={product.description}
          price={product.price}
          // link={project.url}
        />
      ))}
      </div>
      
    </div>
  );
}

export default Rent
