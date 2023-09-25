import React, { useState } from 'react';

const ContactForm = () => {
  const [formType, setFormType] = useState('Enquiry');

  

  return (
    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 p-6 m-10">
      <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 hover:text-[#f472b6]">{formType} Form</h2>
        
        <form className=''>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-2 border rounded-md"
                placeholder="Full Name*"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="w-full p-2 border rounded-md"
                placeholder=" Contact Number"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder="Your Email Address"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 border rounded-md"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="mb-4">
            
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 p-4 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 hover:text-[#f472b6]">
          {formType === 'Enquiry' ? 'Customer Feedback' : 'Enquiry'} Form
        </h2>
        <form>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
              
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full p-2 border rounded-md"
                placeholder=" Full Name*"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="w-full p-2 border rounded-md"
                placeholder=" Contact Number"
              />
            </div>
          </div>

          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 pr-2">
             
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md"
                placeholder=" Email Address"
              />
            </div>
            <div className="w-full md:w-1/2 pl-2">
              
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-2 border rounded-md"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="mb-4">
            
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
