import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Main1 from '../components/Main1';
import Testimonial from '../components/Testimonial';
import Mission from '../components/Mission';
import Predictor from '../components/Predictor';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* w-full sets the width to 100% */}
      <Navbar />
      <Slider />
      <Main1 />
      <Testimonial />
      <Predictor />
      <Mission />
      <Footer />
    </div>
  );
};

export default Home;
