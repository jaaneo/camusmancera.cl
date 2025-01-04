import React from "react";

const programaData = [
  {
    dia: "Lunes 13",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    eventos: [
      "Orquesta Juvenil e Infantil de Valdivia. Director Pablo Matamala Lopetegui.",
      "Orquesta Ernesto Guarda Carrasco. Director Alejandro Torres.",
      "Orquesta Sinfónica Infantil de la Corporación Cultural Municipal de Puerto Montt. Director Arturo Ojeda.",
    ],
    imagen: "/lunes.jpg", // Reemplaza con la URL real de tu imagen
  },
  {
    dia: "Martes 14",
    hora: "19:30 hrs",
    lugar: "Teatro Cervantes, Valdivia",
    eventos: [
      "Armonía Fluvial Cuarteto de Flautas Traversa.",
      "Kuatriada. Música Latinoamericana.",
    ],
    imagen: "/martes.jpg", // Reemplaza con la URL real de tu imagen
  },
  {
    dia: "Miércoles 15",
    hora: "19:30 hrs",
    lugar: "Plaza de Paillaco",
    eventos: ["Concierto en Paillaco. Música para todos."],
    imagen: "/paillaco.jpg", // Reemplaza con la URL real de tu imagen
  },
];

export default function Programa() {
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
