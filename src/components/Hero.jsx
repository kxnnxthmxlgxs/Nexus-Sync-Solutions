// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/images/hero-img.png'

const Hero = () => {
  return (
    <section className=" text-white h-screen flex flex-col justify-center items-center text-center px-6 bg-transparent">
      {/* Headline */}
      
      <h1 className="text-5xl font-bold md:text-6xl mb-10 ">
        Welcome to Nexus Sync Solutions
      </h1>

      <img src={heroImage} alt="hero image" className="mb-10"/>

      {/* Description */}
      <p className="text-xl md:text-xl max-w-lg">
        Empowering your business with cutting-edge web solutions tailored to drive growth and success.
      </p>

      {/* Call to Action */}
      <div className="mt-10 flex gap-10">
        <button className="px-3 py-3 bg-[#1DEBCC] text-white rounded-lg hover:bg-[#15c3a6] transition duration-300">
          Contact Us
        </button>
        <button className="px-7 py-3 bg-[#1DEBCC] text-white rounded-lg hover:bg-[#15c3a6] transition duration-300">
          Works
        </button>
      </div>
      
    </section>
  );
};

export default Hero;
