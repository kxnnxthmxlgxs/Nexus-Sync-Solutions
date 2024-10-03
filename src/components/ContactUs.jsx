// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-transparent text-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch with Us</h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form className="bg-zinc-800 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-zinc-700 text-white"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-zinc-700 text-white"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Your Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 rounded bg-zinc-700 text-white"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1DEBCC] text-white p-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center items-center">
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <p>Email: info@nexussyncsolutions.com</p>
            <p>Phone: +27 82 785 2067</p>
          </div>

          <div className="mb-6 text-center">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 ">
              <a href="#" className="text-accent-color hover:opacity-80">Facebook</a>
              <a href="#" className="text-accent-color hover:opacity-80">Twitter</a>
              <a href="#" className="text-accent-color hover:opacity-80">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
