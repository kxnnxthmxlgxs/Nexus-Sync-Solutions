// src/pages/Contact.jsx
import React from 'react';
import ContactHeader from '../components/contactSection/ContactHeader';
import ContactForm from '../components/contactSection/ContactForm';
import ContactDetails from '../components/contactSection/ContactDetails';
import MapSection from '../components/contactSection/MapSection'; // Optional
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page bg-gray-900  px-6">
      <Header />
      <div className="max-w-7xl mx-auto">
        <ContactHeader />
        <ContactForm />
        <ContactDetails />
        <MapSection /> {/* Include this if you want a map */}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
