import React from "react";

const patrocinadores = [
  {
    nombre: "Teatro Cervantes",
    logo: "/patrocinadores/teatro_cervantes.png",
  },
  {
    nombre: "FOJI",
    logo: "/patrocinadores/logo_foji.jpg",
  },
  {
    nombre: "FAA UACH",
    logo: "/patrocinadores/faa_uach.png",
  },
  {
    nombre: "I. Municipalidad de Paillaco",
    logo: "../paillaco.jpg",
  },
  {
    nombre: "Hotel El Castillo Niebla",
    logo: "/patrocinadores/hotel_el_castillo.png",
  },
  {
    nombre: "SLEP",
    logo: "/patrocinadores/slep.png",
  },
];

export default function Patrocinadores() {
  return (
    <section className="bg-gray-100 py-16" id="patrocinadores">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-orange-500 font-caveat font-semibold mb-4 text-center" style={{ fontSize: "32px" }}>
          XXX Campamento Musical Marqués de Mancera
        </h2>
        <h3 className="text-4xl font-bold text-gray-500 mb-6 text-center">
          Patrocinadores Oficiales
        </h3>
        <p className="text-center text-lg text-gray-600 mb-12">
          Agradecemos el apoyo de nuestras instituciones patrocinadoras que hacen posible este evento.
        </p>
        
        {/* Grid de patrocinadores */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {patrocinadores.map((patrocinador, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={patrocinador.logo}
                alt={patrocinador.nombre}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
