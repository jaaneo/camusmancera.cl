"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLiveVisible, setIsLiveVisible] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Verifica si la hora actual está entre 19:30 y 22:00
  useEffect(() => {
    const checkLiveTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      
      // Rango de tiempo: 19:30 a 22:00
      const isLiveTime =
        (currentHour === 19 && currentMinute >= 30) ||
        (currentHour > 19 && currentHour < 22);

      setIsLiveVisible(isLiveTime);
    };

    checkLiveTime();

    // Revisa cada minuto para actualizar el estado
    const interval = setInterval(checkLiveTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y Título */}
          <div className="flex items-center space-x-4">
            <Image
              src="/logo_camusmancera.png"
              alt="Logo"
              className="h-12"
              width={65}
              height={150}
            />
            <h3
              className="text-orange-500 font-caveat font-semibold text-center"
              style={{ fontSize: "25px" }}
            >
              XXX Camus Mancera
            </h3>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li>
              <button onClick={() => handleScroll("inicio")} className="hover:text-orange-500">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("exponentes")} className="hover:text-orange-500">
                Exponentes
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("programa")} className="hover:text-orange-500">
                Calendario
              </button>
            </li>
            <li>
              <a href="https://inscripciones.camusmancera.cl" target="_blank" className="hover:text-orange-500">
                Inscripciones
              </a>
            </li>
            <li>
              <button onClick={() => handleScroll("preguntas")} className="hover:text-orange-500">
                Preguntas Frecuentes
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("patrocinadores")} className="hover:text-orange-500">
                Patrocinadores
              </button>
            </li>
            {/* Botón "En Vivo" */}
            {isLiveVisible && (
              <li>
                <button
                  onClick={() => window.open("https://www.youtube.com/watch?v=s1zHw2KOhEQ", "_blank")}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-700 transition-transform transform hover:scale-105 animate-pulse-live"
                >
                  En Vivo 🔴
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white border-t border-gray-200`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-4 font-medium text-gray-700">
            {/* Menú móvil similar */}
            <li>
              <button onClick={() => handleScroll("inicio")} className="hover:text-orange-500">
                Inicio
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("exponentes")} className="hover:text-orange-500">
                Exponentes
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("programa")} className="hover:text-orange-500">
                Calendario
              </button>
            </li>
            <li>
              <a href="https://inscripciones.camusmancera.cl" target="_blank" className="hover:text-orange-500">
                Inscripciones
              </a>
            </li>
            <li>
              <button onClick={() => handleScroll("preguntas")} className="hover:text-orange-500">
                Preguntas Frecuentes
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll("patrocinadores")} className="hover:text-orange-500">
                Patrocinadores
              </button>
            </li>
            {/* Botón "En Vivo" en Menú Móvil */}
            {isLiveVisible && (
              <li>
                <button
                  onClick={() => window.open("https://www.youtube.com/watch?v=s1zHw2KOhEQ", "_blank")}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold shadow-md hover:bg-red-700 transition-transform transform hover:scale-105 animate-pulse-live"
                >
                  En Vivo 🔴
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
