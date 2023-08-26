import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import bluepad from '../assets/bluepad.png'

export default function App() {
  return (
    <div className="px-2 sm:px-5 md:px-10 lg:px-20 bg-[#f1b7d4] relative z-[0] ">
      <div className='flex justify-center font-bold text-[40px] pt-5 text-[#f8e8e9] '>Our Product Range</div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30} // Adjust as needed
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[400px] "
      >
        <SwiperSlide className="  py-[8px] px-5"> {/* Adjust the padding value */}
          <div className="bg-white rounded-2xl h-[300px] flex justify-center flex-col">
            <div className='bg-yellow-400 pt-[40px]'>
            <img src={bluepad }className='w-[170px] h-[170px]  '/>
            </div>
            <div className='bg-red-400 text-center'>Sanitary pad</div>
            </div>
        </SwiperSlide>
        
        <SwiperSlide className="  py-[8px] px-5"> {/* Adjust the padding value */}
          <div className="bg-pink-700 h-[300px]">Slide 1</div>
        </SwiperSlide>
        
        <SwiperSlide className="  py-[8px] px-5"> {/* Adjust the padding value */}
          <div className="bg-pink-700 h-[300px]">Slide 1</div>
        </SwiperSlide>
        
        <SwiperSlide className="  py-[8px] px-5"> {/* Adjust the padding value */}
          <div className="bg-pink-700 h-[300px]">Slide 1</div>
        </SwiperSlide>
        
        
       
      </Swiper>
    </div>
  );
}