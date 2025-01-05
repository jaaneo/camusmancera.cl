"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  const scrollToCampamentoInfo = () => {
    const section = document.getElementById("campamento-info");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-tr from-yellow-200 via-white to-green-200 py-20 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtítulo superior */}
        <h3
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-orange-500 mb-4"
          style={{
            fontFamily: "Caveat, sans-serif",
            fontSize: "28px",
          }}
        >
          <span className="sm:text-[40px] md:text-[52px]">Un legado de excelencia musical</span>
        </h3>

        {/* Título principal */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6 py-3"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h1>

        {/* Descripción */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-600"
          style={{ fontFamily: "Raleway, sans-serif" }}
        >
          ¡Únete a la experiencia musical más esperada del año! Del 13 al 18 de enero de 2025, músicos, artistas y amantes de la música se reunirán en Valdivia, Chile, para celebrar la XXX edición del Campamento Musical Marqués de Mancera.
        </p>
      </div>

      {/* Botón flotante */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-8 cursor-pointer"
        onClick={scrollToCampamentoInfo}
      >
        <FaChevronDown
          className="text-orange-500 animate-bounce"
          size={32}
        />
      </div>
    </section>
  );
}
