"use client";

import React from "react";

const programaData = [
  {
    dia: "Lunes 13",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion: "https://goo.gl/maps/TeatroCervantesValdivia", // Enlace de Google Maps
    eventos: [
      "Orquesta Juvenil e Infantil de Valdivia. Director Pablo Matamala Lopetegui.",
      "Orquesta Ernesto Guarda Carrasco. Director Alejandro Torres.",
      "Orquesta Sinfónica Infantil de la Corporación Cultural Municipal de Puerto Montt. Director Arturo Ojeda.",
    ],
    imagen: "/lunes.jpg", // Imagen correspondiente
  },
  {
    dia: "Martes 14",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion: "https://goo.gl/maps/TeatroCervantesValdivia",
    eventos: [
      "Armonía Fluvial Cuarteto de Flautas Traversa.",
      "Kuatriada. Música Latinoamericana.",
    ],
    imagen: "/martes.jpg",
  },
  {
    dia: "Miércoles 15",
    hora: "19:30 hrs",
    lugar: "Plaza de Paillaco",
    ubicacion: "https://goo.gl/maps/PlazaDePaillaco",
    eventos: ["Concierto en Paillaco. Música para todos."],
    imagen: "/paillaco.jpg",
  },
];

export default function Programa() {
  const handleAddToCalendar = (programa: any) => {
    const event = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${programa.dia} - ${programa.eventos[0]}
LOCATION:${programa.lugar}
DTSTART:${formatToICalDate(new Date(`2025-01-${programa.dia.split(" ")[1]}`))}T193000Z
DTEND:${formatToICalDate(new Date(`2025-01-${programa.dia.split(" ")[1]}`))}T213000Z
DESCRIPTION:${programa.eventos.join(", ")}
END:VEVENT
END:VCALENDAR
    `.trim();

    const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${programa.dia.replace(/\s/g, "_")}_evento.ics`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const formatToICalDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0];
  };

  return (
    <section id="programa" className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-500 mb-12 tracking-wide">
          Programa Musical 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programaData.map((programa, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Imagen */}
              <img
                src={programa.imagen}
                alt={`Imagen del ${programa.dia}`}
                className="w-full h-48 object-cover"
              />
              {/* Contenido */}
              <div className="p-6">
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
                {/* Botones */}
                <div className="flex space-x-4 mt-4">
                  <a
                    href={programa.ubicacion}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-orange-500 px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
                  >
                    Ver Ubicación
                  </a>
                  <button
                    onClick={() => handleAddToCalendar(programa)}
                    className="text-white bg-blue-500 px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Agregar al Calendario
                  </button>
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
