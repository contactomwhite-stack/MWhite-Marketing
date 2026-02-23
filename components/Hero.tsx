import React from 'react';
import { LOGO_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6 pt-12 pb-24 bg-background-light">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none hero-watermark select-none">
         <img src={LOGO_URL} alt="" className="w-[40rem] h-[40rem] object-contain grayscale mix-blend-multiply" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-8 animate-fade-in-up">
          <span className="material-symbols-outlined text-sm">auto_awesome</span>
          <span className="text-xs font-bold uppercase tracking-widest">
            Growth Marketing Gastronómico
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight text-slate-900 drop-shadow-sm">
          Crecemos contigo, con{' '}
          <span className="text-primary relative inline-block">
            estrategias reales.
            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-30"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Potenciamos tu marca gastronómica y comercial con estrategias diseñadas
          para el crecimiento real y sostenible en el mercado actual.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planes"
            className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300"
          >
            Ver Planes
          </a>
          <a
            href="#carta"
            className="w-full sm:w-auto bg-white border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 text-slate-700"
          >
            Servicios a la Carta
          </a>
        </div>
      </div>
    </section>
  );
};