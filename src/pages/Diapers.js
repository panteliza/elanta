import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import diaperpic from '../assets/baby diaper.png';
import abc from '../assets/baby boss.png';
import cba from '../assets/baby boss.png';

const Feature = ({ icon, text }) => (
  <div className='flex'>
    <div>
      {' '}
      <img src={icon} className='h-[40px]' alt="Feature Icon" />
    </div>
    <div className='flex items-center'>
      {text}
    </div>
  </div>
);

const Section = ({ title, images, features }) => (
  <div className='border hover:border-purple-500 bg-pink-200 hover:bg-[#e4b3cb] border-pink-400 gap-7 flex rounded-md px-9 py-7'>
    {/* left side */}
    <div className='flex flex-col justify-center w-[500px] '>
      <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-2xl font-semibold'>
        {title}
      </div>
      {features.map((feature, index) => (
        <Feature key={index} icon={diaperpic} text={feature} />
      ))}
    </div>
    {/* left side */}

    {/* right side */}
    <div className='flex justify-center items-center px-5 gap-5 '>
      {images.map((image, index) => (
        <img key={index} src={image} className='h-[240px] w-[240px] transition-transform duration-200 transform hover:scale-125 ' alt={`Image ${index}`} />
      ))}
    </div>
    {/* right side */}
  </div>
);

const Pads = () => {
  const padFeatures = [
    "SIZE: 330 MM",
    "UV sterilized 100% germs protection",
    "Soft topsheet for extra comfort",
    "No harmful perfume or color",
    "Super High Absorbent Japanese Sumitomo Gel",
    "Protection Against Heavy Flow"
  ];

  const padFeatures280MM = [
    "SIZE: 280 MM", // Add size 280 MM
    ...padFeatures.slice(1) // Include remaining features from padFeatures
  ];

  return (
    <div>
      <Navbar />
      <div className=''>
        <img
          src="https://images.ctfassets.net/9wtva4vhlgxb/4ctwud75d425G2fKSt2mr/e484856bf2245b0db94163a5ba65756e/Leaking_Diaper_720________432.jpg?fm=webp&q=70"
          className='w-full h-[450px]'
          alt="Sanitary Pads"
        />
      </div>
      <div className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-center px-28 py-7'>
     
       Explore baby diapers that keep your little one dry and comfy.
      </div>
      <div className=' w-full flex flex-col gap-6 justify-center py-6 px-32'>
        <Section
          title="Baby Boss  Diaper Small"
          images={[abc, cba]}
          features={padFeatures}
        />
        <Section
          title="Baby Boss  Diaper Medium"
          images={[abc, cba]}
          features={padFeatures}
        />
        <Section
          title="Baby Boss  Diaper Large"
          images={[abc, cba]} // You can replace with the appropriate images
          features={padFeatures280MM}
        />
        </div>
      <Footer/>
    </div>
  );
};
export default Pads;
