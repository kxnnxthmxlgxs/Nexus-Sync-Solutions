// src/components/MapSection.jsx
import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section py-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        className="rounded-lg"
      ></iframe>
    </section>
  );
};

export default MapSection;
