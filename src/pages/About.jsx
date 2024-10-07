// src/pages/About.jsx
import React from 'react';
import AboutHeader from '../components/aboutSeciton/AboutHeader';
import AboutContent from '../components/aboutSeciton/AboutContent';
import VisionSection from '../components/aboutSeciton/VisionSection';
import ValuesSection from '../components/aboutSeciton/ValuesSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page bg-gray-900  px-6">
      <Header />
      <div className="max-w-7xl mx-auto">
        
        <AboutHeader />
        <AboutContent />
        <VisionSection />
        <ValuesSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
