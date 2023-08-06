// Navbar.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import necessary dependencies
import abc from '../assets/butterfly.jpg';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle the click on "All Products" link
  const handleAllProductsClick = () => {
    setShowDropdown(false); // Close the dropdown
    // Programmatically navigate to the '/categories' route
    navigate('/categories');
  };

  const handleSanitaryPadsClick = () => {
    setShowDropdown(false); 
   
    navigate('/categories/sanitary-pads');
  };

  const handleAdultDiapersClick = () => {
    setShowDropdown(false); 
   
    navigate('/categories/adult-diaper');
  };

  const handleBabyDiapersClick = () => {
    setShowDropdown(false); 
   
    navigate('/categories/baby-diaper');
  };


  return (
    <div>
      {/* Navbar layout */}
      <div className="flex items-center justify-between w-full gap-10 px-[40px] bg-[#F4F4F4] pt-[12px]">
        <div className="transition-transform duration-200 transform hover:scale-125 cursor-pointer">
          <img src={abc} alt="logo" className="h-[70px] w-[70px] 2xl:h-[150px] 2xl:w-[150px] rounded-full " />
        </div>

        <div className="flex text-[20px] 2xl:text-[40px] gap-16 text-pink-500 cursor-pointer items-center">
          <div
            className="relative flex items-center gap-2 hover:text-blue-400 hover:bg-pink-200 px-2 py-2 rounded-md"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="">PRODUCTS</div>
            <div className="text-[15px] font-bold ">
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-12 2xl:top-20 text-[15px] 2xl:text-[30px]  bg-white pl-3 2xl:pl-5 gap-7  rounded shadow w-[160px] 2xl:w-[280px]">
                <div className="flex flex-col gap-3 pt-2 pb-4">
                  {/* Use the handleAllProductsClick function when clicking on the link */}
                  <div className='hover:text-[#ed93c0]' onClick={handleAllProductsClick}>All Products</div>
                  <div className="hover:text-[#ed93c0]"  onClick={handleSanitaryPadsClick}>Sanitary Pads</div>
                  <div className="hover:text-[#ed93c0]" onClick={handleAdultDiapersClick}>Adult Diapers</div>
                  <div className="hover:text-[#ed93c0]" onClick={handleBabyDiapersClick}>Baby Diapers</div>
                </div>
              </div>
            )}
          </div>
          <div className="hover:text-blue-500 hover:bg-pink-200 px-2 py-2 rounded-md">ABOUT</div>
          <div className="hover:text-blue-500 hover:bg-pink-200 px-2 py-2 rounded-md">CONTACT</div>
        </div>

        <div className="flex text-[25px] 2xl:text-[42px] gap-2 text-pink-400">
          <BsFacebook className="hover:text-pink-600" />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
