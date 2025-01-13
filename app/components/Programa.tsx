"use client";

import React from "react";
import Image from "next/image";

type Programa = {
  dia: string;
  hora: string;
  lugar: string;
  ubicacion: string;
  eventos: string[];
  imagen: string;
  entradas?: string; // Enlace para adquirir entradas (opcional)
};

const programaJazzData: Programa[] = [
  {
    dia: "Lunes 13 de enero",
    hora: "15:00 hrs",
    lugar: "Escuela El Bosque, Valdivia",
    ubicacion:
      "https://www.google.com/maps/place/Escuela+El+Bosque/data=!4m2!3m1!1s0x0:0xa33d29c9641d3d6?sa=X&ved=1t:2428&ictx=111",
    eventos: ["Bienvenida y llegada de alumnos."],
    imagen: "/lunes_jazz.jpg",
  },
  {
    dia: "Martes 14 al Viernes 17 de enero",
    hora: "09:00 a 13:00 hrs / 15:00 a 18:00 hrs",
    lugar: "Escuela El Bosque, Valdivia",
    ubicacion:
      "https://www.google.com/maps/place/Escuela+El+Bosque/data=!4m2!3m1!1s0x0:0xa33d29c9641d3d6?sa=X&ved=1t:2428&ictx=111",
    eventos: ["Clases por la mañana", "Ensayos por la tarde"],
    imagen: "/ensayos_jazz.jpg",
  },
  {
    dia: "Sábado 18 de enero",
    hora: "Por definir",
    lugar: "Por definir",
    ubicacion: "#",
    eventos: ["Gran Concierto de Cierre"],
    imagen: "/sabado_jazz.jpg",
  },
];

const conciertosData: Programa[] = [
  {
    dia: "Lunes 13 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://www.google.com/maps/place/Teatro+Regional+Cervantes/data=!4m2!3m1!1s0x0:0xc0f7a3491355fa2b?sa=X&ved=1t:2428&ictx=111",
    eventos: [
      "Orquesta Juvenil e Infantil de Valdivia. Director Pablo Matamala Lopetegui.",
      "Orquesta Ernesto Guarda Carrasco. Director Alejandro Torres.",
      "Orquesta Sinfónica Infantil de la Corporación Cultural Municipal de Puerto Montt. Director Arturo Ojeda.",
    ],
    imagen: "/concierto_cervantes.jpg",
    entradas:
      "https://www.passline.com/eventos-plano/campamento-musical-marques-de-mancera-dia-1",
  },
  {
    dia: "Martes 14 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://www.google.com/maps/place/Teatro+Regional+Cervantes/data=!4m2!3m1!1s0x0:0xc0f7a3491355fa2b?sa=X&ved=1t:2428&ictx=111",
    eventos: [
      "Armonía Fluvial Cuarteto de Flautas Traversa.",
      "Kuatriada. Música Latinoamericana.",
    ],
    imagen: "/concierto_cervantes_2.jpg",
    entradas:
      "https://www.passline.com/eventos-plano/campamento-musical-marques-de-mancera-dia-2",
  },
];

export default function ProgramaJazzYConciertos() {
  return (
    <section id="programa" className="bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Jornada de Jazz */}
        <h3
          className="text-orange-500 font-caveat font-semibold mb-4 text-center"
          style={{ fontSize: "25px" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h3>
        <h2 className="text-4xl font-bold text-gray-300 mb-6 text-center">
          Programa Jornada de Jazz
        </h2>
   {/* Descripción centrada */}
   <div className="mx-auto mb-12 text-center max-w-2xl">
          <p className="text-lg text-gray-200 leading-relaxed">
            ¡Prepárate para una experiencia inolvidable de jazz en el Campamento Marqués de Mancera!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programaJazzData.map((programa, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 group"
            >
              {/* Imagen */}
              <Image
                src={programa.imagen}
                alt={`Imagen del ${programa.dia}`}
                width={500}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Contenido */}
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                <h3 className="text-2xl font-bold text-orange-400 mb-2">{programa.dia}</h3>
                <p className="text-sm font-medium text-gray-400">{programa.lugar}</p>
                <p className="text-lg font-semibold text-gray-300 mt-2 mb-4">{programa.hora}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {programa.eventos.map((evento, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {evento}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={programa.ubicacion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                  >
                    Ver Ubicación
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
<br /><br /><br />
        {/* Conciertos */}
        <h3
          className="text-orange-500 font-caveat font-semibold mb-4 text-center"
          style={{ fontSize: "25px" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h3>
        <h2 className="text-4xl font-bold text-gray-300 mb-6 text-center">
          Conciertos Destacados
        </h2>
         {/* Descripción centrada */}
         <div className="mx-auto mb-12 text-center max-w-2xl">
          <p className="text-lg text-gray-200 leading-relaxed">
          Llega al Teatro Regional Cervantes el Campamento Musical Marqués de Mancera, un espacio formativo niños, niñas y adolescentes. 
          Actualmente esta actividad está considerada como uno de las más significativas del sur de Chile en su categoría.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conciertosData.map((concierto, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 group"
            >
              {/* Imagen */}
              <Image
                src={concierto.imagen}
                alt={`Imagen del ${concierto.dia}`}
                width={500}
                height={192}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Contenido */}
              <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">{concierto.dia}</h3>
                <p className="text-sm font-medium text-gray-400">{concierto.lugar}</p>
                <p className="text-lg font-semibold text-gray-300 mt-2 mb-4">{concierto.hora}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-200">
                  {concierto.eventos.map((evento, i) => (
                    <li key={i} className="text-sm leading-relaxed">
                      {evento}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-6">
                  <a
                    href={concierto.ubicacion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                  >
                    Ver Ubicación
                  </a>
                  {concierto.entradas && (
                    <a
                      href={concierto.entradas}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                    >
                      Adquirir Entradas
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
