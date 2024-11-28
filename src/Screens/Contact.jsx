import { Modal } from 'antd';
import React, { useState } from 'react'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formspree.io/f/mbljzqvl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {

        setIsModalVisible(true);
        e.target.reset();
        setSelectedCountry('');
        setOtherCountry('');
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='mt-[90px]'>
      <div className='flex items-center justify-center gap-3 flex-col '>
        <h1 className="text-white font-bold text-4xl text-center">How Can We Help You?</h1>
        <div className="flex items-center flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2">
            <MdEmail color='#5277ba' size={40} />
            <p className='text-white text-2xl'>zeeshansd767@gmail.com</p>
          </div>
          <div>
            <p className="text-slate-200 text-2xl hidden sm:block">|</p>
          </div>
          <div className="flex items-center gap-2">
            <MdLocalPhone color='#5277ba' size={40} />
            <p className='text-white text-2xl'>+92-3142372327</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <input
              type="text"
              placeholder='Enter Name'
              id="Name"
              name="Name"
              required
              className='px-4 py-4 border-2 border-[#5277ba] w-[350px]' />
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Enter Email'
              required
              className='px-4 py-4 border-2 border-[#5277ba] w-[350px]' />
            <input
              type="text"
              id='subject'
              name='subject'
              placeholder='Subject'
              required
              className='px-4 py-4 border-2 border-[#5277ba] w-[350px] sm:w-[716px]' />
            <input
              type="text"
              id="message"
              name="message"
              placeholder='Message'
              required
              className='px-6 py-10 border-2 border-[#5277ba] w-[350px] sm:w-[716px]' />
            <button className='px-4 py-4 w-[350px] text-white bg-[#5277ba] hover:bg-blue-800 sm:w-[716px]'>Send Message</button>
          </div>
        </form>
      </div>
      <Modal
          title="Submission Successful"
          visible={isModalVisible}
          onOk={handleOk}
          cancelButtonProps={{ style: { display: 'none' } }} 
          okText="OK"
        >
          <p>Your message has been submitted. Thank you for contacting us!</p>
        </Modal>
    </div>
  )
}

export default Contact
