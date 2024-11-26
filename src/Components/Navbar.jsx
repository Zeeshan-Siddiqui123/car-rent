import React from 'react'
import { routes } from '../Routes'
import { Link, NavLink } from 'react-router-dom'
import carImage from '../assets/carlogo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='w-full h-[80px] flex justify-between items-center bg-black z-10 fixed top-0'>
                <div className='w-[100px] ml-5 '><img src={carImage} alt="" /></div>
                <div className='flex gap-4 text-lg'>
                    {routes.map(({ path, label }, index) => (
                        <NavLink key={index} to={path} className={({isActive})=>
                            isActive ? 'text-sky-500 underline font-bold text-sm': 'text-white text-sm hover:text-sky-500'}>{label}</NavLink>
                    ))}
                </div>
                <div></div>
            </nav>
        </div>
    )
}

export default Navbar
