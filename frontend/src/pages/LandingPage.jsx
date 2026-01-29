import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CrowdfundingSummary from '../components/CrowdfundingSummary';
import Story from '../components/Story';
import Features from '../components/Features';
import TechSpecs from '../components/TechSpecs';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CrowdfundingSummary />
        <Story />
        <Features />
        <TechSpecs />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
