import React from 'react'
import { SlBadge } from "react-icons/sl";
import { TfiIdBadge } from "react-icons/tfi";
import { BiBadge } from "react-icons/bi";

const Mission = () => {
  return (
    <div>
      <div className='h-[300px] bg-white flex justify-center pb-7 px-14'>
       <div className="flex flex-col  w-[400px] justify-center items-center px-2 gap-5">
        <div className=""><SlBadge className='text-pink-400 text-[40px]'/></div>
        <div className='font-bold text-gray-800 text-[25px]'>Our Mission</div>
        <div className='text-gray-500 text-center'>Create and promote affordable and quality hygiene products that will make everyday lives better.</div>
       </div>
       <div className="flex flex-col  w-[400px] justify-center items-center px-2 gap-5">
        <div className=""><BiBadge className='text-pink-400 text-[40px]'/></div>
        <div className='font-bold text-gray-800 text-[25px]'>Our Vision</div>
        <div className='text-gray-500 text-center'>We envision ourselves as a brand of choice for Nepalese citizens who seek world-class personal hygiene solutions.</div>
       </div>
       <div className="flex flex-col  w-[400px] justify-center items-center px-2 gap-5">
        <div className=""><TfiIdBadge className='text-pink-400 text-[40px]'/></div>
        <div className='font-bold text-gray-800 text-[25px]'>Primary Line of Business</div>
        <div className='text-gray-500 text-center'>Health And Hygiene Products: Sanitary pads, Baby Diapers, Adult Diapers</div>
       </div>

      </div>
    </div>
  )
}

export default Mission