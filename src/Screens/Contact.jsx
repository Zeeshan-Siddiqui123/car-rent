import React from 'react'
import { MdEmail, MdLocalPhone } from 'react-icons/md'

const Contact = () => {
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
       <form action="">
       <div className="flex items-center justify-center gap-4 flex-wrap">
          <input type="text" placeholder='Enter Name' className='px-4 py-4 border-2 border-[#5277ba] w-[350px]'/>
          <input type="email" placeholder='Enter Email' className='px-4 py-4 border-2 border-[#5277ba] w-[350px]'/>
          <input type="text" placeholder='Subject' className='px-4 py-4 border-2 border-[#5277ba] w-[350px] sm:w-[716px]' />
          <input type="text" placeholder='Message' className='px-6 py-10 border-2 border-[#5277ba] w-[350px] sm:w-[716px]'/>
          <button className='px-4 py-4 w-[350px] text-white bg-[#5277ba] hover:bg-blue-800 sm:w-[716px]'>Send Message</button>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Contact
