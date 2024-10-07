// src/components/ContactDetails.jsx
import React from 'react';

const ContactDetails = () => {
  return (
    <section className="contact-details py-12 text-center">
      <h2 className="text-3xl font-bold text-white">Contact Information</h2>
      <p className="text-gray-400 mt-4">Feel free to reach us through the following contact details:</p>
      <div className="flex flex-col items-center mt-6 space-y-4">
        <p className="text-white">
          <span className="font-bold">Address:</span> 123 Main Street, City, Country
        </p>
        <p className="text-white">
          <span className="font-bold">Phone:</span> +123 456 7890
        </p>
        <p className="text-white">
          <span className="font-bold">Email:</span> info@nexussync.com
        </p>
      </div>
    </section>
  );
};

export default ContactDetails;
