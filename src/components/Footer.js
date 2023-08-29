import React from 'react'
import abc from '../assets/butterfly.jpg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import {PiFlowerFill } from 'react-icons/pi';
import {BsTelephoneFill } from 'react-icons/bs';
import {HiOutlineMail } from 'react-icons/hi';
import {MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-[#f1b7d4] bg-pink-400  '>
      <div className=' flex  gap-[100px] py-8 px-7'>
      <div className="flex flex-col gap-2  justify-center w-[300px] items-center ">
      <div className="flex justify-center items-center w-[80px]   ">
        <img src={abc} alt="logo" className="h-[50px] w-[50px] rounded-full" />
      </div>
      <div className="font-semibold text-lg text-white text-center">Elanta Health Care & Hygiene Prducts Pvt.Ltd.</div>
      <div className='flex   gap-2 text-pink-700 cursor-pointer text-[25px]  '>
    <BsFacebook className="hover:text-pink-600" />
    <BsInstagram className="hover:text-pink-600" />
</div>
    </div>
      <div className=' flex flex-col justify-center items-center font-semibold text-[18px] gap-5'>
       <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>Home</div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>About</div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>Contact</div>
        </div>
      </div>
      

      <div className=' flex flex-col justify-center items-center font-semibold text-[18px] gap-5'>
       <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>Sanitary Pads</div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>Baby Diapers</div>
        </div>
        <div className='flex gap-2 justify-center items-center'>
        <div><PiFlowerFill className='text-pink-600'/></div>
        <div className='text-white'>Adult Diapers</div>
        </div>
      </div>
      <div className=' flex flex-col justify-center items-center font-semibold text-[18px] gap-2'>
      <div className="font-bold text-[20px] text-white text-center">Elanta Health Care & Hygiene Prducts Pvt.Ltd.</div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='flex gap-2 justify-center items-center text-white'>
          <div>
             <BsTelephoneFill/>
          </div>
          <div>977 9855060867</div>
          </div>
           <div className='flex gap-2 justify-center items-center text-white'>
          <div>
             <HiOutlineMail/>
          </div>
          <div>elantahealthcare@gmail.com</div>
          </div>
          <div className='flex gap-2 justify-center items-center text-white'>
          <div>
             <MdLocationOn className='text-white'/>
          </div>
          <div>Bharatpur-4, Nepal</div>
          </div>

        </div>
       
        
        
      </div>
      </div>


    <div className='text-center py-3 font-semibold text-white bg-pink-400'>&copy; 2023 Elanta Health and Hygiene Products. All rights reserved.</div>  
    </div>
  )
};
export default Footer;

