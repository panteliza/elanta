import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Pads from './pages/Pads';
import Diapers from './pages/Diapers';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Your other components */}
      
        <Routes>
          {/* Define your routes here */}
          <Route path="/baby-diaper" element={<Diapers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sanitary-pads" element={<Pads />} />
          <Route path="/" element={<Home />} />
          
          {/* Add a route for /elanta */}
          <Route path="/elanta" element={<Home />} />
          
          {/* Add more routes if needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
