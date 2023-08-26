import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Slider from './components/Slider';
import Main1 from './components/Main1';

import Testimonial from './components/Testimonial';
import Mission from './components/Mission';
import Predictor from './components/Predictor';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
       <Slider/>
       <Main1/>
       <Testimonial/>
     <Predictor/>
       <Mission/>
      
        <Routes>
          {/* Define your routes here */}
          <Route path="/categories" element={<Categories />} />
          {/* Add more routes if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
