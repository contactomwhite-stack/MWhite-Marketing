import React from 'react';
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  const links = [
    { label: 'Instagram', href: 'https://www.instagram.com/mwhite.a/' },
    { label: 'WhatsApp', href: 'https://wa.me/573166385978' },
    { label: 'Email', href: 'mailto:contacto.mwhite@gmail.com' },
  ];

  return (
    <footer className="py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
          <div className="h-8 w-8 rounded-md flex items-center justify-center overflow-hidden">
             <img 
               src={LOGO_URL} 
               alt="MWHITE Logo" 
               className="h-full w-full object-cover object-center scale-105" 
             />
          </div>
          <span className="font-black text-slate-400">
            © 2026 MWHITE Marketing
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-medium text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <p className="text-slate-400 text-sm italic font-light text-center md:text-right">
         Crecemos contigo, con estrategias reales.
        </p>
      </div>
    </footer>
  );
};