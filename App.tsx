import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GallerySection } from './components/GallerySection';
import { PricingSection } from './components/PricingSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-display">
      <Header />
      <main>
        <Hero />
        <GallerySection />
        <PricingSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;
