import React from 'react';
import { SERVICES } from '../constants';

export const ServicesSection: React.FC = () => {
  return (
    <section id="carta" className="py-24 px-6 bg-background-light">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
             <div className="h-12 w-12 bg-slate-200 rounded-full flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-slate-400">restaurant_menu</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight italic text-slate-900">
              MWhite a la Carta
            </h2>
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest bg-slate-200 px-4 py-2 rounded-full self-start md:self-auto">
            Mínimo por orden: $600.000 COP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex justify-between items-start border-b border-slate-200 pb-4 group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="flex-1 pr-4">
                <h4 className="text-lg font-bold group-hover:text-primary transition-colors text-slate-900">
                  {service.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1 font-light italic">
                  {service.description}
                </p>
              </div>
              <span className="text-primary font-bold whitespace-nowrap">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
