import React from 'react';
import bluepad from '../assets/bluepad.png';

export default function App() {
  return (
    <div className="px-10 bg-[#f1b7d4] relative z-[0] flex flex-col justify-center items-center py-16 ">
      <div className='flex justify-center font-bold sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  text-white '>Our Product Range</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 flex justify-center gap-8 2xl:gap-20">
        {/* Product Cards */}
        <ProductCard image={bluepad} title="Sanitary pad" />
        <ProductCard image={bluepad} title="Product 2" />
        <ProductCard image={bluepad} title="Product 3" />
        <ProductCard image={bluepad} title="Product 4" />
        <ProductCard image={bluepad} title="Product 5" />
        <ProductCard image={bluepad} title="Product 6" />
      </div>
    </div>
  );
}

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl h-[280px] w-[270px] 2xl:h-[300px] 2xl:w-[320px] md:w-[300px] lg:w-[300px] flex flex-col justify-center items-center p-5 ">
      <div className='   '>
        <img src={image} alt={title} className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[200px]' />
      </div>
      <div className=' text-center sm:py-2  text-[22px]  lg:text-[25px]'>{title}</div>
    </div>
  );
}
