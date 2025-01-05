"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Image
            src="/logo_camusmancera.png"
            alt="Logo"
            className="h-12"
            width={65}
            height={150}
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li><a href="#inicio" className="hover:text-orange-500">Inicio</a></li>
            <li><a href="#exponentes" className="hover:text-orange-500">Exponentes</a></li>
            <li><a href="#calendario" className="hover:text-orange-500">Calendario</a></li>
            <li><a href="#noticias" className="hover:text-orange-500">Noticias</a></li>
            <li><a href="https://inscripciones.camusmancera.cl" className="hover:text-orange-500">Inscripciones</a></li>
            <li><a href="#contacto" className="hover:text-orange-500">Contacto</a></li>
          </ul>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white border-t border-gray-200`}
        >
          <ul className="flex flex-col space-y-4 py-4 px-4 font-medium text-gray-700">
            <li><a href="#inicio" className="hover:text-orange-500">Inicio</a></li>
            <li><a href="#exponentes" className="hover:text-orange-500">Exponentes</a></li>
            <li><a href="#calendario" className="hover:text-orange-500">Calendario</a></li>
            <li><a href="#noticias" className="hover:text-orange-500">Noticias</a></li>
            <li><a href="https://inscripciones.camusmancera.cl" className="hover:text-orange-500">Inscripciones</a></li>
            <li><a href="#contacto" className="hover:text-orange-500">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
