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
          className='font-extrabold     text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-center px-6 py-7'
      >
         
Discover a Wide Range of Daily Sanitary Pads.
        </div>
      </div>
    </div>
  );
};

export default Pads;
