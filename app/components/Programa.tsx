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
};

const programaData: Programa[] = [
  {
    dia: "Lunes 13 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://google.com/maps/dir/-39.8399439,-73.2240565/Teatro+Cervantes+Valdivia/@-39.8260035,-73.2530655,6919m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9615ee761f544113:0xc0f7a3491355fa2b!2m2!1d-73.2456142!2d-39.8127818?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: [
      "Orquesta Juvenil e Infantil de Valdivia. Director Pablo Matamala Lopetegui.",
      "Orquesta Ernesto Guarda Carrasco. Director Alejandro Torres.",
      "Orquesta Sinfónica Infantil de la Corporación Cultural Municipal de Puerto Montt. Director Arturo Ojeda.",
    ],
    imagen: "/lunes.jpg",
  },
  {
    dia: "Martes 14 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://google.com/maps/dir/-39.8399439,-73.2240565/Teatro+Cervantes+Valdivia/@-39.8260035,-73.2530655,6919m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9615ee761f544113:0xc0f7a3491355fa2b!2m2!1d-73.2456142!2d-39.8127818?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: [
      "Armonía Fluvial Cuarteto de Flautas Traversa.",
      "Kuatriada. Música Latinoamericana.",
    ],
    imagen: "/martes.jpg",
  },
  {
    dia: "Miércoles 15 de enero",
    hora: "19:30 hrs",
    lugar: "Plaza de Paillaco",
    ubicacion:
      "https://www.google.com/maps/dir//Av.+Bernardo+O'Higgins+345,+Paillaco,+Los+R%C3%ADos/@-40.0706411,-72.9551351,27578m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x9616798c859aa3f7:0x24f6345739e662d0!2m2!1d-72.8727342!2d-40.0706703?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: ["Concierto en Paillaco. Música para todos."],
    imagen: "/paillaco.jpg",
  },
  {
    dia: "Jueves 16 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://google.com/maps/dir/-39.8399439,-73.2240565/Teatro+Cervantes+Valdivia/@-39.8260035,-73.2530655,6919m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9615ee761f544113:0xc0f7a3491355fa2b!2m2!1d-73.2456142!2d-39.8127818?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: [
      "Concierto de Música Barroca: Ensamble del Sur.",
      "Orquesta de Cámara de la Universidad Austral de Chile.",
    ],
    imagen: "/jueves.jpg",
  },
  {
    dia: "Viernes 17 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://google.com/maps/dir/-39.8399439,-73.2240565/Teatro+Cervantes+Valdivia/@-39.8260035,-73.2530655,6919m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9615ee761f544113:0xc0f7a3491355fa2b!2m2!1d-73.2456142!2d-39.8127818?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: [
      "Orquesta Sinfónica Juvenil Nacional de Chile.",
      "Coro de la Universidad Austral de Chile.",
    ],
    imagen: "/viernes.jpg",
  },
  {
    dia: "Sábado 18 de enero",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    ubicacion:
      "https://google.com/maps/dir/-39.8399439,-73.2240565/Teatro+Cervantes+Valdivia/@-39.8260035,-73.2530655,6919m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x9615ee761f544113:0xc0f7a3491355fa2b!2m2!1d-73.2456142!2d-39.8127818?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
    eventos: [
      "Gran Concierto de Clausura.",
      "Participación de todas las orquestas del Campamento Musical.",
    ],
    imagen: "/sabado.jpg",
  },
];

export default function Programa() {
  const handleAddToCalendar = (programa: Programa) => {
    const [dia, mes] = programa.dia.split(" de ");
    const fecha = `2025-${mes === "enero" ? "01" : ""}-${dia.padStart(2, "0")}`;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Evento: ${programa.lugar}
DTSTART:${fecha}T193000Z
DTEND:${fecha}T213000Z
LOCATION:${programa.lugar}
DESCRIPTION:Evento del Campamento Musical 2025
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `evento-${programa.dia.replace(/\s/g, "-")}.ics`;
    link.click();
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
              <Image
                src={programa.imagen}
                alt={`Imagen del ${programa.dia}`}
                width={500}
                height={192}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
