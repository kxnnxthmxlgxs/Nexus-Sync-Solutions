// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  logo  from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent flex justify-between items-center p-4">
      {/* Logo Section */}
      <div className="text-white">
        <img src={logo} alt="Nexus Sync Solutions Logo" className="h-10" />
      </div>
      
      {/* Burger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Navigation Links */}
      <nav className={`fixed top-0 left-0 h-full w-2/3 bg-zinc-800 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:static md:flex md:flex-row md:items-center md:bg-transparent md:w-auto`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 p-4">
          <li className="py-2 md:py-0">
            <Link to="/" className="text-white " onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/services" className="text-white" onClick={toggleMenu}>Services</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/about" className="text-white" onClick={toggleMenu}>About</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/contact" className="text-white" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/portfolio" className="text-white" onClick={toggleMenu}>Works</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
