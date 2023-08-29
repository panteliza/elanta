import React from 'react';
import Navbar from '../components/Navbar';

const Pads = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        <img
          src="https://plus.unsplash.com/premium_photo-1661306967147-f5b9e87a352b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGluayUyMHRoZW1lJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className='w-full h-[400px]'
          alt="Sanitary Pads"
        />
        <div
          className='text-[30px] font-bold text-center px-[200px] py-7 text-gradient from-pink-500 via-blue-500 to-purple-500'
        >
          Experience an extensive selection of sanitary pads,
        </div>
      </div>
    </div>
  );
};

export default Pads;
