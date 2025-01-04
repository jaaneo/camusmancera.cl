import React from "react";

export default function Home() {
  const emojis = ["🎻", "🎺", "🎹", "🎷", "🥁", "🎸", "🪗"];

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-tr from-orange-400 via-green-400 to-yellow-300 overflow-hidden">
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Emojis flotantes */}
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="absolute text-4xl animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      {/* Contenido */}
      <div className="relative text-center text-white p-6">
        <img
          src="/logo_camusmancera.png"
          alt="Logo Campamento Musical Marqués de Mancera"
          className="w-32 h-32 mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">
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
        <p className="mt-2 text-lg font-light">
          ¡Muy pronto disponible!
        </p>
      </div>
    </main>
  );
}
