"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const emojis = ["🎻", "🎺", "🎹", "🎷", "🥁", "🎸", "🪗"];
  const [emojiPositions, setEmojiPositions] = useState<{ top: string; left: string; delay: string }[]>([]);

  useEffect(() => {
    // Generar posiciones aleatorias en el cliente
    const positions = emojis.map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setEmojiPositions(positions);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-orange-400 via-green-400 to-yellow-300 overflow-hidden">
      {/* Emojis flotantes */}
      {emojiPositions.map((position, index) => (
        <span
          key={index}
          className="absolute text-4xl animate-float opacity-50"
          style={{
            top: position.top,
            left: position.left,
            animationDelay: position.delay,
          }}
        >
          {emojis[index]}
        </span>
      ))}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 text-center text-white p-6">
        <img
          src="/logo_camusmancera.png"
          alt="Logo Campamento Musical Marqués de Mancera"
          className="w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          XXX Campamento <br />
          Musical <br />
          Marqués De Mancera
        </h1>
        <p className="mt-4 text-lg">
          <span className="px-2">13 Enero – 18 Enero</span>
          <span className="text-orange-400">|</span>
          <span className="px-2">Valdivia – Chile 2025</span>
          <span className="text-orange-400">|</span>
          <span className="px-2">Edición presencial</span>
        </p>
        <p className="mt-8 text-xl font-medium">Estamos trabajando en el nuevo sitio, versión 2025</p>
        <p className="mt-2 text-lg font-light">¡Muy pronto disponible!</p>
        <a
          href="/Reglamento_Campamento_version_xxx.pdf"
          download
          className="mt-6 inline-block text-lg font-bold text-orange-400 underline hover:text-orange-300"
        >
          Descargar Reglamento del Campamento
        </a>
      </div>
    </main>
  );
}
