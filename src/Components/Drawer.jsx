import React, { useState } from 'react';
import { Drawer } from 'antd';
import { CiMenuFries } from 'react-icons/ci';
import { routes } from '../Routes';
import carImage from '../assets/carlogo.png'
import { NavLink } from 'react-router-dom';

const Toggle = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] =useState(true);
 
const showLoading = () => {
    setOpen(true);
    setLoading(false);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <button onClick={showLoading}>
      <CiMenuFries size='30' color='#5277ba' />
      </button>
      <Drawer 
        closable
        destroyOnClose
        title={<div className='footer-name flex items-center justify-center gap-0'>
            {/* <div className='w-[60px] h-[60px] rounded-full border bg'></div> */}
            <img src={carImage} alt="" className='w-[100px]'/>
            {/* <h2 className='text-xl font-bold ml-2 text-[#2aa2d2]'>Zeeshan Ahmed Siddiqui</h2> */}
          </div>}
        placement="right"
        drawerStyle={{
            backgroundColor: 'black', // Set your desired background color
            color: '#fff', // Text color for better visibility
          }}
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        
        <div className='flex items-center flex-col justify-center gap-4 mt-16'>
          {routes.map(({ path, label}, index)=>(
            <NavLink key={index} to={path} onClick={() => setOpen(false)} className={({isActive})=>
             isActive ? 'text-[#5277ba]  text-xl underline font-bold': 
             ' text-xl text-[#5277ba] hover:text-blue-800'}>
             <div>{label}</div>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Toggle;