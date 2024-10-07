// src/components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section bg-[#1DEBCC] py-12 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white">Ready to take your business to the next level?</h2>
      <p className="text-gray-900 mt-4">Contact us today and discover how we can help you achieve your goals.</p>
      <button className="mt-6 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800">
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
