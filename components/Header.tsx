import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, LOGO_URL } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-background-light/95 backdrop-blur-md border-b border-primary/10 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="h-10 w-10 rounded-lg flex items-center justify-center overflow-hidden shadow-sm">
            <img 
              src={LOGO_URL} 
              alt="MWHITE Logo" 
              className="h-full w-full object-cover object-center scale-105" 
            />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
            MWHITE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contacto')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            Empecemos
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 hover:text-primary transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background-light border-b border-gray-200 shadow-xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-lg font-medium text-slate-700 hover:text-primary py-2 border-b border-gray-100 last:border-0"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('#contacto')}
            className="bg-primary text-white w-full py-3 rounded-xl font-bold mt-2"
          >
            Empecemos
          </button>
        </div>
      )}
    </header>
  );
};