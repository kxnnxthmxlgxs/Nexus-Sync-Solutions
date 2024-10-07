// src/components/ServiceCards.jsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { FaCode, FaPaintBrush, FaBullhorn } from 'react-icons/fa'; // Example icons

const ServiceCards = () => {
  return (
    <section className="service-cards grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      <ServiceCard
        title="Web Development"
        description="Custom websites and web applications tailored to your business needs."
        icon={<FaCode size={40} />}
      />
      <ServiceCard
        title="Graphic Design"
        description="Creative and professional designs to make your brand stand out."
        icon={<FaPaintBrush size={40} />}
      />
      <ServiceCard
        title="Digital Marketing"
        description="Strategies that help your business grow through digital channels."
        icon={<FaBullhorn size={40} />}
      />
      {/* Add more services as needed */}
    </section>
  );
};

export default ServiceCards;
