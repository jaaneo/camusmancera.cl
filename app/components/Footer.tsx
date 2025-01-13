"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome"; // Importa la configuración de FontAwesome

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Efecto de suavidad
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <img
            src="/logo_camusmancera.png"
            alt="Logo Campamento Musical Marqués de Mancera"
            className="w-24 mb-4"
          />
          <p className="text-sm leading-relaxed">
            XXX Campamento Musical Marqués de Mancera. Inspirando a músicos jóvenes desde 1995 con experiencias formativas de excelencia.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleScroll("inicio")}
                className="hover:text-orange-500 transition"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("exponentes")}
                className="hover:text-orange-500 transition"
              >
                Exponentes
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("programa")}
                className="hover:text-orange-500 transition"
              >
                Calendario
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll("preguntas")}
                className="hover:text-orange-500 transition"
              >
                Preguntas Frecuentes
              </button>
            </li>
            <li>
  <a
    href="mailto:campamentomarquesmancera@gmail.com"
    className="hover:text-orange-500 transition"
  >
    Contacto
  </a>
</li>

          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/camusmancera.cl/?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={['fab', 'facebook-f']} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/camusmancera.cl/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCJZVs4RfwqivdV_pfE4NwkA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 Campamento Musical Marqués de Mancera. Todos los derechos reservados.
      </div>
    </footer>
  );
}
