import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import sanitaryPad from '../assets/bluepad.png';
import diaper from '../assets/diaperpic.png';
import facialwipes from '../assets/facialwipes.png';
import facemask from '../assets/facemask.png';
import adultDiaper from '../assets/adult diaper2.png';
import anotherPad from '../assets/pad1.png';

export default function App() {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  
  const productLinks = [
    '/sanitary-pads',
    '/baby-diaper',
    
    '/adult-diaper',
    '/sanitary-pads',
  ];

  return (
    <div className="px-10 bg-[#f1b7d4] relative z-0 flex flex-col justify-center items-center py-16">
      <div className='flex justify-center font-bold sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-white'>Our Product Range</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 flex justify-center gap-8 2xl:gap-20">
        {/* Product Cards */}
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <ProductCard
            key={index}
            image={index === 1 ? sanitaryPad : index === 2 ? diaper : index === 3 ? facialwipes : index === 4 ? facemask : index === 5 ? adultDiaper : anotherPad}
            title={
              index === 1 ? 'Sanitary Pad' :
              index === 2 ? 'Baby Diaper' :
              index === 3 ? 'Facial Wipes' :
              index === 4 ? 'Face Mask' :
              index === 5 ? 'Adult Diaper' :
              'Sanitary Pad'
            }
            isHovered={isHovered === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            to={productLinks[index - 1]}
          />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ image, title, isHovered, onMouseEnter, onMouseLeave, to }) => {
  const scale = isHovered ? 1 : 0.9;
  const zIndex = isHovered ? 1 : 'auto';

  return (
    <Link to={to} className="no-underline"> 
      <div
        className={`bg-white rounded-2xl h-[280px] w-[270px] 2xl:h-[300px] 2xl:w-[320px] md:w-[300px] lg:w-[300px] flex flex-col justify-center items-center p-5 border border-pink-400 hover:border-blue-400 ${isHovered ? 'hover:scale-100' : 'hover:scale-90'}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease', zIndex: zIndex }}
      >
        <div className=''>
          <img src={image} alt={title} className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[200px]' />
        </div>
        <div className='text-center sm:py-2 text-[22px] lg:text-[25px] '>{title}</div>
      </div>
    </Link>
  );
}
