// src/components/CallToAction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="call-to-action bg-gray-900 text-center py-12">
      <h2 className="text-3xl font-bold text-white">Want to work with us?</h2>
      <p className="text-gray-400 mt-4">Contact us today to discuss how we can help bring your vision to life.</p>
      <Link to="/contact" className="mt-6 inline-block bg-[#1DEBCC] text-white py-3 px-6 rounded-lg hover:bg-teal-400">
        Get in Touch
      </Link>
    </section>
  );
};

export default CallToAction;
