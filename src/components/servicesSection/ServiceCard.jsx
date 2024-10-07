// src/components/ServiceCard.jsx
import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="icon mb-4 text-[#1DEBCC]">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;
