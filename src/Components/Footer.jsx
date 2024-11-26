import React from 'react'
import carImage from '../assets/carlogo.png'
import { FaGreaterThan } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div>
            <div className='flex w-full h-[370px] items-center justify-around flex-wrap'>
                <div className='flex items-start flex-col'>
                    <img src={carImage} alt="LOGO" className='w-[200px]' />
                    <p className='text-slate-300'>Luxury Car Rental Pakistan professional <br /> Car Rental Service. Customer well-<br />being, satisfaction and choice are our <br /> extreme priority.</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-bold text-xl'>Popular Locations</p>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>Karachi</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>Lahore</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>Islamabad</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-bold text-xl'>Featured Makes</p>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>Mercedes Benz</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>Audi</p>
                    </div>
                    <div className='flex gap-1'>
                        <FaGreaterThan color='#5277ba' />
                        <p className='text-white'>BMW</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-white font-bold text-xl'>Quick Links</p>
                    <div className='flex gap-1'>
                        <Link to='/about'>
                            <FaGreaterThan color='#5277ba' />
                        </Link>
                        <p className='text-white'>About Us</p>
                    </div>
                    <div className='flex gap-1'>
                        <Link to='/contact'>
                            <FaGreaterThan color='#5277ba' />
                        </Link>
                        <p className='text-white'>Contact Us</p>
                    </div>
                    <div className='flex gap-1'>
                        <Link to='/rent-a-car'>
                            <FaGreaterThan color='#5277ba' />
                        </Link>
                        <p className='text-white'>Rent A Car</p>
                    </div>
                </div>

            </div>
            <div>
                <hr color='#5277ba' />
                <p className='text-center text-white mt-5 mb-5'>Copyright 2024 © Carento, All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
