'use client';
import React, { useState } from "react";

const images = [
  { src: "/campamento1.png", alt: "Orquesta en campamento" },
  { src: "/campamento2.png", alt: "Concierto en campamento" },
  { src: "/campamento3.png", alt: "Ensayo grupal" },
  { src: "/campamento4.png", alt: "Participación de orquestas" },
];

export default function CampamentoInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase mb-2">
            Campamento Musical
          </h3>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            XXX Campamento Musical Marqués de Mancera
          </h2>
          <div className="w-16 h-1 bg-green-600 mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            El Campamento Musical Marqués de Mancera es un espacio formativo
            para niños, niñas y adolescentes. Fue creado bajo la premisa de
            reunir en un mismo lugar a todos quienes buscan mejorar sus
            conocimientos y habilidades en la interpretación de diversos
            instrumentos.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tuvo sus orígenes en la Isla Mancera y su crecimiento obligó a
            buscar nuevas dependencias en Niebla y Valdivia. Desde ahí se ha
            proyectado como el campamento más importante del sur de Chile al
            ser escenario para la instrucción de miles de músicos de todo el
            país y el lugar escogido por profesionales nacionales y extranjeros
            invitados a compartir sus conocimientos.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="relative">
            <button
              onClick={showPreviousImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200"
            >
              &larr;
            </button>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <button
              onClick={showNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-200"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
