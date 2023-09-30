import React from 'react';
import abc from '../assets/butterfly.jpg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { PiFlowerFill } from 'react-icons/pi';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-[#f1b7d4] bg-pink-400'>
      <div className='flex flex-col gap-4 py-8 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-[60px] lg:gap-[120px] xl:gap-[150px] '>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-[80px]">
            <img src={abc} alt="logo" className="h-14 w-14 rounded-full" />
          </div>
          <div className="font-semibold text-lg text-white text-center">Elanta Health Care & Hygiene Products Pvt.Ltd.</div>
          <div className='flex gap-2 text-pink-700 cursor-pointer text-[25px]'>
            <BsFacebook className="hover:text-pink-600" />
            <BsInstagram className="hover:text-pink-600" />
          </div>
        </div>

        <div className='flex flex-col justify-center items-center font-semibold md:text-[15px] text-[18px] gap-5'>
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='Home' />
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='About' />
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='Contact' />
        </div>

        <div className='flex flex-col justify-center items-center font-semibold text-[18px] md:text-[15px] gap-5'>
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='Sanitary Pads' />
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='Baby Diapers' />
          <NavItem icon={<PiFlowerFill className='text-pink-600' />} text='Adult Diapers' />
        </div>

        <div className='flex flex-col justify-center items-center font-semibold text-[18px] gap-2'>
          <div className="font-bold text-[20px] text-white text-center">Elanta Health Care & Hygiene Prducts Pvt.Ltd.</div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <ContactItem icon={<BsTelephoneFill />} text='977 9855060867' />
            <ContactItem icon={<HiOutlineMail />} text='elantahealthcare@gmail.com' />
            <ContactItem icon={<MdLocationOn className='text-white' />} text='Bharatpur-4, Nepal' />
          </div>
        </div>
      </div>

      <div className='text-center py-3 font-semibold text-white bg-pink-400'>&copy; 2023 Elanta Health and Hygiene Products. All rights reserved.</div>
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className='flex gap-2 justify-center items-center'>
      <div>{icon}</div>
      <div className='text-white'>{text}</div>
    </div>
  );
};

const ContactItem = ({ icon, text }) => {
  return (
    <div className='flex gap-2 justify-center items-center text-white'>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default Footer;
