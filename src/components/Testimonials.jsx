// src/components/Testimonials.jsx
import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Innovations',
    feedback: 'Nexus Sync Solutions transformed our digital presence. The team was amazing to work with and delivered top-notch results.',
    image: 'path_to_image1.jpg', // You can replace with real images
  },
  {
    name: 'Sarah Smith',
    role: 'Marketing Director, Creative Co.',
    feedback: 'The professionalism and expertise shown by Nexus Sync Solutions are unmatched. Our website has never performed better!',
    image: 'path_to_image2.jpg',
  },
  {
    name: 'Michael Brown',
    role: 'Founder, StartUp Hub',
    feedback: 'We are thrilled with the innovative solutions provided by Nexus Sync. They understood our needs perfectly.',
    image: 'path_to_image3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-zinc-800 text-white py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border-2 border-[#15c3a6] p-6 rounded-lg shadow-lg text-center">
            {/* Client Image */}
            <img
              src={testimonial.image}
              alt={`${testimonial.name}'s testimonial`}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />

            {/* Client Name */}
            <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>

            {/* Client Role */}
            <p className="text-sm text-gray-400 mb-4">{testimonial.role}</p>

            {/* Feedback */}
            <p className="text-gray-300">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
