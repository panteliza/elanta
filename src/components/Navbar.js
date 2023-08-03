import React, { useState } from 'react';
import abc from '../assets/butterfly.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between w-full gap-10 px-[50px] bg-[#F4F4F4] pt-[10px]">
        <div>
          <img src={abc} alt='logo' className='h-[70px] w-[70px] rounded-full ' />
        </div>
        <div className='flex text-[25px] gap-16 text-pink-500'>
          {/* Wrap the "Products" menu item and dropdown inside a parent container */}
          <div
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="relative"
          >
            Products
            {isDropdownOpen && (
              <div className="absolute top-[30px] left-0 text-[15px] bg-white p-2 rounded shadow">
                <div>Sanitary Pads</div>
                <div>Adult Diapers</div>
                <div>Baby Diapers</div>
              </div>
            )}
          </div>
          {/* End of "Products" and dropdown */}
          <div>About</div>
          <div>Contact Us</div>
        </div>
        <div className='flex text-[25px] gap-2 text-pink-400'>
          <BsFacebook />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
