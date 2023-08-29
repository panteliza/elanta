import React from 'react'



import Navbar from '../components/Navbar';

import Slider from '../components/Slider';
import Main1 from '../components/Main1';

import Testimonial from '../components/Testimonial';
import Mission from '../components/Mission';
import Predictor from '../components/Predictor';
import  Footer  from '../components/Footer';


const Home = () => {
  return (
    <div>
  <Navbar/>
       <Slider/>
       <Main1/>
       <Testimonial/>
     <Predictor/>
       <Mission/>
       <Footer/>
    </div>
  )
}

export default Home