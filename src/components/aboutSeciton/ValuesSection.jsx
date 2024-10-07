// src/components/ValuesSection.jsx
import React from 'react';

const ValuesSection = () => {
  return (
    <section className="values-section py-8 text-white">
      <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
      <ul className="list-disc ml-5 space-y-2 text-lg">
        <li><strong>Innovation:</strong> Staying ahead with the latest in tech.</li>
        <li><strong>Customer-Centric:</strong> Prioritizing our clients' needs.</li>
        <li><strong>Collaboration:</strong> Working together to drive success.</li>
        <li><strong>Excellence:</strong> Delivering top-tier solutions.</li>
      </ul>
    </section>
  );
};

export default ValuesSection;
