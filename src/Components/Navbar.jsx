import React from 'react'
import { routes } from '../Routes'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='w-full h-[80px] flex justify-between items-center bg-black'>
                <div className='nav-img text-white text-lg'>LOGO</div>
                <div className='flex gap-4 text-lg'>
                    {routes.map(({ path, label }, index) => (
                        <Link key={index} to={path} className='text-white'>{label}</Link>
                    ))}
                </div>
                <div></div>
            </nav>
        </div>
    )
}

export default Navbar
