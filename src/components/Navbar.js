import React from 'react'
import abc from '../assets/logo.jpg'
import {BsFacebook  } from 'react-icons/bs';
import {BsInstagram  } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div>
      <div className=" flex items-center w-full gap-10 ">
        <div className='h-[30px] w-[30px] rounded-full '>
          <img src={abc} alt='logo' />
        </div>
        <div className='flex text-[20px]'>
         <div>Products</div>
         <div>About</div>
         <div>Contact Us</div>
        </div>
        <div className='flex'>
         <BsFacebook/>
         <BsInstagram/>
        </div>
      </div>
    </div>
  )
}

export default Navbar