import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PricingSection } from './components/PricingSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-display">
      <Header />
      <main>
        <Hero />
        <PricingSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
