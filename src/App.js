import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Slider from './components/Slider';
import Main1 from './components/Main1';
import Main2 from './components/Main2';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
       <Slider/>
       <Main1/>
       <Main2/>
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
