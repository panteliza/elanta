// App.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import pads from '../assets/IMG-6926.jpg'
import bluepads from '../assets/IMG-8118.jpg'
import diapers from '../assets/IMG-4762.jpg'

export default function Slider() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className=" object-scale-down swiper-container"
      >
        <SwiperSlide>
          <div className="w-full">
          <img src={pads}className=" h-[640px] w-full object-cover"/>
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
          <img src={bluepads}className=" h-[640px] w-full object-cover"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
          <img src={diapers}className=" h-[640px] w-full object-cover"/>
          </div>
        </SwiperSlide>
      
        
        
      </Swiper>
    </>
  );
}
