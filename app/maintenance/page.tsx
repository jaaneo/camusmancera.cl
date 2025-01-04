"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const emojis = ["🎻", "🎺", "🎹", "🎷", "🥁", "🎸", "🪗"];
  const [emojiStyles, setEmojiStyles] = useState<
    { top: string; left: string; animationDelay: string }[]
  >([]);

  useEffect(() => {
    const styles = emojis.map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setEmojiStyles(styles);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-orange-400 via-green-400 to-yellow-300 overflow-hidden">
      {/* Emojis flotantes */}
      {emojiStyles.map((style, index) => (
        <span
          key={index}
          className="absolute text-4xl animate-float opacity-50"
          style={style}
        >
          {emojis[index]}
        </span>
      ))}

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 text-center text-white p-6">
        <Image
          src="/logo_camusmancera.png"
          alt="Logo Campamento Musical Marqués de Mancera"
          width={128}
          height={128}
          className="mx-auto mb-6"
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
        <p className="mt-8 text-xl font-medium">
          Estamos trabajando en el nuevo sitio, versión 2025
        </p>
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
