// src/components/WhyChooseUs.jsx
import React from 'react';

const features = [
  {
    title: 'Expert Team',
    description:
      'Our team of skilled professionals brings years of experience in web development and digital solutions.',
    icon: '👨‍💻',
  },
  {
    title: 'Innovative Solutions',
    description:
      'We focus on delivering innovative and creative solutions tailored to your business needs.',
    icon: '💡',
  },
  {
    title: 'Customer Support',
    description:
      'We provide ongoing support to ensure your success beyond the initial launch.',
    icon: '🤝',
  },
  {
    title: 'Data-Driven Strategies',
    description:
      'We use data-driven approaches to make informed decisions and maximize your ROI.',
    icon: '📊',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-transparent text-white py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-transparent rounded-lg hover:bg-gray-700 transition duration-300"
          >
            {/* Icon */}
            <div className="text-5xl mb-4">{feature.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
