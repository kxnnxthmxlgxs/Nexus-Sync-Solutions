// src/components/CallToAction.jsx
import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section  py-12 px-2 text-center rounded-lg shadow-lg pb-20">
      <h2 className="text-3xl font-bold text-white pb-5">Ready to take your business to the next level?</h2>
      <p className="text-gray-100 mt-4 pb-5">Contact us today and discover how we can help you achieve your goals.</p>
      <button className="mt-6 bg-[#1DEBCC] text-white py-3 px-6 rounded-lg hover:bg-gray-800">
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
