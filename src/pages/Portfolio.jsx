// src/pages/Portfolio.jsx
import React from 'react';
import PortfolioHeader from '../components/portfolioSection/PortfolioHeader';
import ProjectGallery from '../components/portfolioSection/ProjectGallery';
import TechnologiesUsed from '../components/portfolioSection/TechnologiesUsed';
import CallToAction from '../components/portfolioSection/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-page bg-gray-900  px-6">
      <Header />
      <div className="max-w-7xl mx-auto">
        <PortfolioHeader />
        <ProjectGallery />
        <TechnologiesUsed />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
