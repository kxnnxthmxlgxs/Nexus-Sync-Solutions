// src/pages/Services.jsx
import React from 'react';
import ServicesHeader from '../components/servicesSection/ServicesHeader';
import ServiceCards from '../components/servicesSection/ServiceCards';
import CallToAction from '../components/servicesSection/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="services-page bg-gray-900 px-6">
      <Header />
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServiceCards />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
