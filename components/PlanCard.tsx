import React from 'react';
import { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  const isHighlight = plan.highlight;

  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-300 flex flex-col h-full
      ${
        isHighlight
          ? 'border-2 border-primary bg-white shadow-2xl shadow-primary/10 md:scale-105 z-10 order-first md:order-none'
          : 'border border-slate-200 bg-background-light hover:border-primary/50 hover:shadow-lg'
      }`}
    >
      {isHighlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
          Más Popular
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-xl font-bold mb-2 ${
            isHighlight ? 'text-primary' : 'text-slate-900'
          }`}
        >
          {plan.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 font-medium">
          {plan.subtitle}
        </p>
        <div className="flex flex-col">
          <span className="text-4xl font-black text-slate-900">
            {plan.price}
          </span>
          <span className="text-slate-500 font-bold text-xs">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className={`flex items-start gap-3 text-sm ${
              isHighlight ? 'font-semibold' : 'font-normal'
            }`}
          >
            <span className="material-symbols-outlined text-primary text-[20px]">
              {feature.text.includes('Todo lo del Plan')
                ? 'add_circle'
                : 'check_circle'}
            </span>
            <span className={isHighlight && feature.text.includes('Todo lo del Plan') ? 'text-primary' : ''}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className={`block text-center w-full py-4 rounded-lg font-bold transition-all ${
          isHighlight
            ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25'
            : 'bg-slate-200 text-slate-700 hover:bg-primary hover:text-white'
        }`}
      >
        {plan.ctaText}
      </a>
    </div>
  );
};
