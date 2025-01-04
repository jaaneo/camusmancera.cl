import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image src="/logo_camusmancera.png" alt="Logo" className="h-12" width={65} height={150} />
          <ul className="flex space-x-6 font-medium text-gray-700">
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
