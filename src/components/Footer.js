import React from 'react';
import pads from '../assets/IMG-6926.jpg';

const blogs = [
  {
    id: 1,
    title:  "Stay Fresh: The Importance of Changing Pads Every 3-4 Hours",
    image: 'pads',
    content: 'When it comes to menstrual hygiene, one of the most crucial practices is changing your sanitary pad regularly.'
  },
    
  {
    id: 2,
    title: 'Feel Good: Empower Your Cycle',
    image: {pads},
    content: "Every woman's journey with menstruation is unique, but one thing holds true for all: the importance of cultivating healthy menstrual habits."
   
  },
  {
    id: 3,
    title: 'Breaking Barriers: Embracing Open Conversations About Menstruation',
    image: 'pads',
    content: "In a world where open conversations about menstruation have often been shrouded in silence and secrecy, it's time to break free from the confines of discomfort and shyness. "
    
  },
];



export default function Footer() {
  return (
    <div className=''>

    </div>
  )
}

// {blogs.map((blog) => (
//           <div key={blog.id} className="mb-6">
//             <img src={blog.image} alt={blog.title} className="mb-2 rounded" />
//             <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
//             <p className="text-gray-600">{blog.content}</p>
//             <div className="mt-2">
             