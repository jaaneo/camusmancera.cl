import React from "react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-[url('/banner01.png')] bg-cover bg-center bg-no-repeat text-white text-center py-80"
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">XXX Campamento Musical</h1>
        <h2 className="text-4xl font-semibold">Marqués De Mancera</h2>
        <p className="mt-4 text-lg">
          13 Enero – 18 Enero <span className="text-orange-500">|</span> Valdivia – Chile 2025{" "}
          <span className="text-orange-500">|</span> Edición Presencial
        </p>
      </div>
    </section>
  );
}
