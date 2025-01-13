"use client";

import React, { useState } from "react";

type Pregunta = {
  pregunta: string;
  respuesta: string;
};

const preguntasData: Pregunta[] = [
  {
    pregunta: "¿Dónde se realizarán las clases de la Jornada de Jazz?",
    respuesta:
      "Las clases se llevarán a cabo en la <b>Escuela El Bosque</b>, ubicada en <b>Av. Circunvalación Sur 2365, Valdivia, Los Ríos</b>. Puedes consultar la ubicación exacta en Google Maps haciendo clic en este enlace: \n" +
      "<a href='https://www.google.com/maps/place/Escuela+El+Bosque/data=!4m2!3m1!1s0x0:0xa33d29c9641d3d6?sa=X&ved=1t:2428&ictx=111' target='_blank' class='text-orange-400 underline'>Ver Ubicación</a>.",
  },
  {
    pregunta: "¿Dónde será el alojamiento para los asistentes de fuera?",
    respuesta:
      "El alojamiento será en el <b>Internado</b>, ubicado en <b>Av. Simpson, Valdivia, Los Ríos</b>.",
  },
  {
    pregunta: "¿Cuál es el horario y las fechas de la Jornada de Jazz?",
    respuesta: `
      <ul class="list-disc list-inside text-gray-300">
        <li><b>Lunes 13 de enero:</b> Bienvenida a las 15:00 hrs (llegada de alumnos).</li>
        <li><b>Del martes 14 al viernes 17 de enero:</b></li>
        <ul class="ml-4">
          <li>09:00 a 13:00 hrs: Clases</li>
          <li>15:00 a 18:00 hrs: Ensayos</li>
        </ul>
        <li><b>Sábado 18 de enero:</b> Gran Concierto de Cierre (horario y lugar por definir).</li>
      </ul>
    `,
  },
  {
    pregunta: "¿Cómo será el transporte entre el internado y la escuela?",
    respuesta:
      "Desde el internado a la escuela, los alumnos pueden tomar la <b>micro 20</b> y bajarse a una cuadra del colegio. Para el retorno, deben tomar la misma <b>micro 20</b> con destino <b>Picarte</b> y bajarse en la <b>Biblioteca Municipal</b>.",
  },
  {
    pregunta: "¿Quiénes recibirán alimentación durante el campamento?",
    respuesta:
      "La alimentación será proporcionada únicamente a los asistentes provenientes de fuera de Valdivia.",
  },
  {
    pregunta: "¿Cómo puedo solicitar alojamiento?",
    respuesta:
      "Puedes solicitar alojamiento escribiendo al correo: \n" +
      "<a href='mailto:campamentomarquesmancera@gmail.com' class='text-orange-400 underline'>campamentomarquesmancera@gmail.com</a>.",
  },
];

export default function Preguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePregunta = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="preguntas" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3
          className="text-orange-500 font-caveat font-semibold mb-4 text-center"
          style={{ fontSize: "25px" }}
        >
          XXX Campamento Musical Marqués de Mancera
        </h3>
        <h2 className="text-4xl font-bold text-gray-300 text-center mb-10">
          Preguntas Frecuentes
        </h2>
        {/* Descripción centrada */}
        <div className="mx-auto mb-12 text-center max-w-2xl">
          <p className="text-lg font-semibold text-gray-400 text-center mt-6">
            Hemos seleccionado un grupo de preguntas frecuentes para ayudarte a
            resolver cualquier inquietud que puedas tener. Si tienes más dudas,
            no dudes en escribirnos al correo:
            <a
              href="mailto:campamentomarquesmancera@gmail.com"
              className="text-orange-500 hover:underline"
            >
              {" "}
              campamentomarquesmancera@gmail.com
            </a>{" "}
            <br />
            ¡Estaremos encantados de ayudarte!
          </p>
        </div>
        <div className="space-y-6">
          {preguntasData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => togglePregunta(index)}
                className="w-full text-left p-4 text-lg font-semibold text-gray-200 bg-gray-700 hover:bg-gray-600 transition"
              >
                {item.pregunta}
                <span className="float-right">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="p-4 text-gray-300 border-t border-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.respuesta }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
