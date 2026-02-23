import React from 'react';
import { PLANS } from '../constants';
import { PlanCard } from './PlanCard';

export const PricingSection: React.FC = () => {
  return (
    <section id="planes" className="py-24 bg-white relative">
        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
            Planes de Crecimiento
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Selecciona la receta perfecta para el momento actual de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};
