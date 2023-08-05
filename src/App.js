import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Categories from './pages/Categories';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
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
