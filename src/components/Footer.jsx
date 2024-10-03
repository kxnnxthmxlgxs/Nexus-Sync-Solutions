// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-4xl font-bold mb-10 text-center">Nexus Sync Solutions</h3>
          <p className="mb-4 text-center">
            We help businesses build digital solutions that empower growth and success. Get in touch to see how we can assist with your web development and marketing needs.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-accent-color">About Us</a></li>
            <li><a href="/services" className="hover:text-accent-color">Our Services</a></li>
            <li><a href="/contact" className="hover:text-accent-color">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-accent-color">FAQ</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-10 justify-center">
            <a href="#" className="text-accent-color hover:opacity-80">Facebook</a>
            <a href="#" className="text-accent-color hover:opacity-80">Twitter</a>
            <a href="#" className="text-accent-color hover:opacity-80">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center">
        <p>&copy; 2024 Nexus Sync Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
