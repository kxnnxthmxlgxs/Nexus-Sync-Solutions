// src/components/ValuesSection.jsx
import React from 'react';

const ValuesSection = () => {
  return (
    <section className="values-section py-10 text-white ">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Core Values</h2>
      <div className="list-disc ml-5 space-y-2 text-lg">
        <p><strong>Innovation:</strong> Staying ahead with the latest in tech.</p>
        <br />
        <p><strong>Customer-Centric:</strong> Prioritizing our clients' needs.</p>
        <br />
        <p><strong>Collaboration:</strong> Working together to drive success.</p>
        <br />
        <p><strong>Excellence:</strong> Delivering top-tier solutions.</p>
      </div>
    </section>
  );
};

export default ValuesSection;
