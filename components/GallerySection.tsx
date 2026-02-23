import React from 'react';

export const GallerySection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Impacto y Crecimiento */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight text-slate-900">
            Impacto y Crecimiento
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full max-w-sm border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-100">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1gOgZns6f8M1PWOhdtFfAJdbcVz6M6js_" 
                  alt="Testimonio positivo cliente" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <p className="text-slate-600 text-center font-medium">Feedback de clientes satisfechos.</p>
            </div>
            <div className="w-full max-w-sm border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-100">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1awrc9ukuDfFvRx0nWjlaMxviBmFPt0D6" 
                  alt="Crecimiento en redes sociales" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <p className="text-slate-600 text-center font-medium">Resultados reales de nuestras campañas.</p>
            </div>
          </div>
        </div>

        {/* Sándwiches de Autor */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight text-slate-900">
            Sándwiches de Autor
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-xs aspect-square">
              <img 
                src="https://drive.google.com/uc?export=view&id=1dD3lWaLqZKOz0KpaatiIpkDBdss6ULdD" 
                alt="Sándwich de pollo desmechado" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-xs aspect-square">
              <img 
                src="https://drive.google.com/uc?export=view&id=1NClrquKj33TkAOmp_sXWitsgBx97zxPT" 
                alt="Preparación de sándwich" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>

        {/* Momento Dulce */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight text-slate-900">
            Momento Dulce
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-xs aspect-square">
              <img 
                src="https://drive.google.com/uc?export=view&id=1p3Sg7FyYDgZ_tIUMrF6YsXldqFe6cWde" 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg w-full max-w-xs aspect-square">
              <img 
                src="https://drive.google.com/uc?export=view&id=1udEi3IZhGpUGhj7ls1D0GDiCwmzK8eSr" 
                alt="" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                referrerPolicy="no-referrer"
                />
              </div>
          </div>
        </div>

        {/* Comunidad y Sonrisas */}
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-12 tracking-tight text-slate-900">
            Comunidad y Sonrisas
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="overflow-hidden rounded-3xl shadow-lg w-full max-w-md aspect-video group">
              <img 
                src="https://drive.google.com/uc?export=view&id=1NyN8S0Gedg4Tj2VFY5cNjGS-Z6AQzeAO" 
                alt="Clientes disfrutando" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-lg w-full max-w-md aspect-video group">
              <img 
                src="https://drive.google.com/uc?export=view&id=1k-bUMNsIlDRBDAxulvbS4UvkztDgJBcC" 
                alt="Compartiendo galletas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
