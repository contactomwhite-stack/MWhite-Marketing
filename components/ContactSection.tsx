import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    brand: '',
    service: 'Plan Antojo (Recomendado)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "573166385978";
    const text = `Hola MWHITE, quiero potenciar mi marca.

*Nombre:* ${formState.name}
*Marca:* ${formState.brand}
*Servicio:* ${formState.service}
*Mensaje:* ${formState.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900">
            Empecemos a cocinar tu estrategia
          </h2>
          <p className="text-slate-600 text-lg">
            Cuéntanos sobre tu marca y agendemos una sesión estratégica gratuita.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-primary/10 space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Nombre Completo
              </label>
              <input
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-background-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-slate-800 placeholder:text-slate-400"
                placeholder="Ej. Juan Pérez"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
                Nombre del Restaurante / Marca
              </label>
              <input
                name="brand"
                value={formState.brand}
                onChange={handleChange}
                required
                className="w-full bg-background-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-slate-800 placeholder:text-slate-400"
                placeholder="Ej. MWhite Bistro"
                type="text"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Servicio de Interés
            </label>
            <div className="relative">
              <select
                name="service"
                value={formState.service}
                onChange={handleChange}
                className="w-full bg-background-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-slate-800 appearance-none cursor-pointer"
              >
                <option>Plan Antojo (Recomendado)</option>
                <option>Visibilidad & Identidad</option>
                <option>Dominio Gastronómico</option>
                <option>Servicios a la Carta</option>
              </select>
               <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">
              Mensaje
            </label>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              className="w-full bg-background-light border-none rounded-xl p-4 focus:ring-2 focus:ring-primary transition-all text-slate-800 placeholder:text-slate-400 resize-none"
              placeholder="¿Qué necesitas potenciar?"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-5 rounded-xl font-black text-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all uppercase tracking-widest mt-4 flex items-center justify-center gap-2"
          >
            <span>Enviar solicitud a WhatsApp</span>
            <span className="material-symbols-outlined text-2xl">send</span>
          </button>
        </form>
      </div>
    </section>
  );
};