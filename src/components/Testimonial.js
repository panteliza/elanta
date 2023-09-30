import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Mother of Two',
    content: "These products are amazing! I've never been happier with my purchases.",
    imageUrl: 'https://images.unsplash.com/photo-1667132713689-dfe53c325445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Fitness Instructor',
    content: 'The health and hygiene products on this website are top-notch. Highly recommended!',
    imageUrl: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'Yoga Instructor',
    content: 'I love the quality and variety of health products available here. Truly exceptional!',
    imageUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80',
  },
];

function TestimonialPage() {
  return (
    <div className="bg-[#f1b7d4] pt-2 flex flex-col gap-7">
      <header className="text-white text-center">
        <h1 className="font-bold  sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] ">Our Customer Says</h1>
      </header>
      <main className="container mx-auto px-4 md:px-6">
        <section className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-lg shadow-md p-4 md:p-6 border border-gray-300 ${
                  index % 2 === 0 ? 'md:order-first' : 'md:order-last'
                }`}
              >
                <div className="mb-3">
                  <img
                    src={testimonial.imageUrl}
                    alt={`Profile of ${testimonial.name}`}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full inline-block mr-2"
                  />
                  <div className="font-semibold text-blue-700">
                    {testimonial.name}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-3">{testimonial.content}</p>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default TestimonialPage;
