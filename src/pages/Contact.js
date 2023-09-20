import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-4xl font-semibold">Your thoughts and opinions matter to us!</h1>
          
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-purple-700 ">
          Your feedback and suggestions are invaluable to us. Please reach out to us using the contact details provided below.
          </p>
          {/* Additional contact details can be added here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
