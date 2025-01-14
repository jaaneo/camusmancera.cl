"use client";

import React from "react";

type CampamentoOnlineProps = {
  videoId: string; // ID del video de YouTube
  title?: string; // Título opcional para el componente
};

const CampamentoOnline: React.FC<CampamentoOnlineProps> = ({
  videoId,
  title = "Transmisión en Vivo",
}) => {
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Subtítulo Superior */}
        <h3
          className="text-sm text-center tracking-wide text-orange-500 font-caveat font-semibold mb-4"
          style={{ fontSize: "25px" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h3>

        {/* Título */}
        <h2 className="text-4xl font-bold text-gray-700 mb-8 text-center">
          {title}
        </h2>

        {/* Video Embed */}
        <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-300 transition-shadow duration-300">
          <div className="aspect-w-4 aspect-h-3">
            {/* Proporción más alta: 4:3 */}
            <iframe
              src={youtubeEmbedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-96"
              title="YouTube Live Stream"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampamentoOnline;
