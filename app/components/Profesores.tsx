import React from "react";

const profesores = [
  {
    nombre: "Pablo Matamala",
    descripcion: "Director y coordinador general Campamentos Marqués de Mancera",
    imagen: "/profesores/pablo_matamala.jpg",
  },
  {
    nombre: "Benjamín Roman",
    descripcion: "Apoyo coordinación orquestas, intérprete violín",
    imagen: "/profesores/benjamin_roman.jpg",
  },
  {
    nombre: "Nicolás Matamala",
    descripcion: "Profesor e intérprete de cello",
    imagen: "/profesores/nicolas_matamala.jpg",
  },
  {
    nombre: "Oliver Oporto",
    descripcion: "Profesor e intérprete de cello",
    imagen: "/profesores/oliver_oporto.jpg",
  },
  {
    nombre: "Alejandro Cárcamo",
    descripcion: "Profesor e intérprete de viola",
    imagen: "/profesores/alejandro_carcamo.jpg",
  },
  {
    nombre: "Verónica Solís",
    descripcion: "Luthería, prof. Contrabajo",
    imagen: "/profesores/veronica_solis.jpg",
  },
  {
    nombre: "Cristian Crisosto",
    descripcion: "Intérprete, profesor de maderas y de improvisación musical",
    imagen: "/profesores/cristian_crisosto.jpg",
  },
  {
    nombre: "Joel Toledo",
    descripcion: "Intérprete y profesor de batería",
    imagen: "/profesores/joel_toledo.jpg",
  },
  {
    nombre: "Matías Fierro",
    descripcion: "Intérprete y profesor de trompeta",
    imagen: "/profesores/matias_fierro.jpg",
  },
  {
    nombre: "Leonel Sánchez",
    descripcion: "Intérprete y profesor de corno",
    imagen: "/profesores/leonel_sanchez.jpg",
  },
  {
    nombre: "Matías Soto",
    descripcion: "Profesor e intérprete de trombón",
    imagen: "/profesores/matias_soto.jpg",
  },
  {
    nombre: "Daniel Leiva",
    descripcion: "Intérprete de violín",
    imagen: "/profesores/daniel_leiva.jpg",
  },
  {
    nombre: "Camilo Cañoles",
    descripcion: "Intérprete de violín",
    imagen: "/profesores/camilo_canoles.jpg",
  },
  {
    nombre: "Isaac Ulloa",
    descripcion: "Intérprete de violín",
    imagen: "/profesores/isaac_ulloa.jpg",
  },
  {
    nombre: "Cristian Carrillo",
    descripcion: "Intérprete de viola",
    imagen: "/profesores/cristian_carrillo.jpg",
  },
  {
    nombre: "Fátima Aguilar",
    descripcion: "Intérprete de guitarra",
    imagen: "/profesores/fatima_aguilar.jpg",
  },
  {
    nombre: "Iván Conde",
    descripcion: "Intérprete de guitarra",
    imagen: "/profesores/ivan_conde.jpg",
  },
  {
    nombre: "Marcia Modinger",
    descripcion: "Intérprete de contrabajo, coordinación",
    imagen: "/profesores/marcia_modinger.jpg",
  },
];

export default function Profesores() {
  return (
    <section id="exponentes" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Títulos */}
        <h3
          className="text-orange-500 font-caveat font-semibold mb-4 text-center"
          style={{ fontSize: "25px" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h3>
        <h2 className="text-4xl font-bold text-gray-600 mb-6 text-center">
          Profesores e Intérpretes
        </h2>

        {/* Descripción centrada */}
        <div className="mx-auto mb-12 text-center max-w-2xl">
          <p className="text-lg text-gray-700 leading-relaxed">
          El Campamento Musical Marqués de Mancera cuenta con un equipo de profesores
          e intérpretes destacados de Chile, comprometidos con entregar una experiencia
          educativa única y elevar el nivel musical de cada participante.
          </p>
        </div>

        {/* Lista de Profesores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {profesores.map((profesor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={profesor.imagen}
                alt={profesor.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {profesor.nombre}
                </h3>
                <p className="text-gray-600">{profesor.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}