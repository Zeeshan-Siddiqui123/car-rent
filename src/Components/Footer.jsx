import React from 'react';
import carImage from '../assets/carlogo.png';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black py-10">
            <div className="flex flex-wrap items-start justify-around w-full gap-8 px-4 lg:px-10">
                {/* Logo Section */}
                <div className="flex flex-col items-start w-full lg:w-auto">
                    <img src={carImage} alt="LOGO" className="w-[150px] lg:w-[200px]" />
                    <p className="text-slate-300 mt-4 text-sm lg:text-base">
                        Luxury Car Rental Pakistan professional <br />
                        Car Rental Service. Customer well- <br />
                        being, satisfaction, and choice are our <br />
                        extreme priority.
                    </p>
                </div>

                {/* Popular Locations */}
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <p className="text-white font-bold text-lg lg:text-xl">Popular Locations</p>
                    {['Karachi', 'Lahore', 'Islamabad'].map((location) => (
                        <div key={location} className="flex items-center gap-2">
                            <FaGreaterThan color="#5277ba" />
                            <p className="text-white text-sm lg:text-base">{location}</p>
                        </div>
                    ))}
                </div>

                {/* Featured Makes */}
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <p className="text-white font-bold text-lg lg:text-xl">Featured Makes</p>
                    {['Mercedes Benz', 'Audi', 'BMW'].map((make) => (
                        <div key={make} className="flex items-center gap-2">
                            <FaGreaterThan color="#5277ba" />
                            <p className="text-white text-sm lg:text-base">{make}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-3 w-full lg:w-auto">
                    <p className="text-white font-bold text-lg lg:text-xl">Quick Links</p>
                    {[
                        { text: 'About Us', path: '/about' },
                        { text: 'Contact Us', path: '/contact' },
                        { text: 'Rent A Car', path: '/rent-a-car' },
                    ].map(({ text, path }) => (
                        <div key={text} className="flex items-center gap-2">
                            <Link to={path}>
                                <FaGreaterThan color="#5277ba" />
                            </Link>
                            <p className="text-white text-sm lg:text-base">{text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-10">
                <hr className="border-t border-[#5277ba]" />
                <p className="text-center text-white mt-5 mb-5 text-sm lg:text-base">
                    Copyright 2024 © Rento, All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
