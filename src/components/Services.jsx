// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: 'Web Development',
    description: 'High-performance websites tailored to your business needs.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and user-friendly designs for a seamless experience.',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with targeted digital campaigns.',
    icon: '📈',
  },
  {
    title: 'Data Analysis',
    description: 'Leverage your data to make informed business decisions.',
    icon: '📊',
  },
];

const Services = () => {
  return (
    <section className="bg-zinc-800 text-white py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6 py-5 bg-transparent rounded-lg hover:bg-gray-700 transition duration-300"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{service.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
