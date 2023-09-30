import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import pads from '../assets/IMG-6926.jpg';
import bluepads from '../assets/IMG-8118.jpg';
import diapers from '../assets/IMG-4762.jpg';

export default function Slider() {
  return (
    <div className="w-full relative z-[0]">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="object-scale-down swiper-container"
      >
        <SwiperSlide>
          <div className="w-full">
            <img src={pads} className="h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={bluepads} className=" h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={diapers} className=" h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
