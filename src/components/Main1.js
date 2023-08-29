import React from 'react';
import bluepad from '../assets/bluepad.png';

export default function App() {
  return (
    <div className="px-10 bg-[#f1b7d4] relative z-[0] flex flex-col justify-center items-center py-16 ">
      <div className='flex justify-center font-bold text-[40px]  text-[#f8e8e9] '>Our Product Range</div>
      <div className="grid grid-cols-3 mt-8 flex justify-center  gap-24">
        {/* Top Row */}
        <ProductCard image={bluepad} title="Sanitary pad" />
        <ProductCard image={bluepad} title="Product 2" />
        <ProductCard image={bluepad} title="Product 3" />
        
        {/* Bottom Row */}
        <ProductCard image={bluepad} title="Product 4" />
        <ProductCard image={bluepad} title="Product 5" />
        <ProductCard image={bluepad} title="Product 6" />
      </div>
    </div>
  );
}

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl h-[280px] w-[270px] flex flex-col justify-center items-center p-5">
      <div className='bg-yellow-400 py-4'>
        <img src={image} alt={title} className='w-[170px] h-[170px]' />
      </div>
      <div className='bg-red-400 text-center py-2'>{title}</div>
    </div>
  );
}
