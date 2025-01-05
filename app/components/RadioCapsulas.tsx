"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaRandom, FaList } from "react-icons/fa";

const tracks = [
  {
    name: "Cuando los Santos van Marchando",
    artist: "Autor Desconocido",
    album: "Campamento Musical",
    url: "/cuando_los_santos_van_marchando.mp3",
    cover: "/cuando_los_santos_van_marchando_cover.jpg",
  },
  {
    name: "Danzón N°2",
    artist: "Artista Desconocido",
    album: "Clásicos",
    url: "/danzon_n2.mp3",
    cover: "/danzon_n2_cover.png",
  },
  {
    name: "Obertura El Barbero de Sevilla",
    artist: "Rossini",
    album: "Óperas Famosas",
    url: "/obertura_barbero_de_sevilla.mp3",
    cover: "/obertura_barbero_de_sevilla_cover.png",
  },
  {
    name: "Pájaro de Fuego",
    artist: "Stravinsky",
    album: "Ballets",
    url: "/pajaro_de_fuego.mp3",
    cover: "/el_pajaro_de_fuego_cover.jpg",
  },
];

export default function AudioPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    if (audioRef.current) {
      const handleLoadedMetadata = () => setDuration(audioRef.current?.duration || 0);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => audioRef.current?.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(e.target.value);
    }
  };

  const handleNextTrack = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setCurrentTrackIndex(randomIndex);
    } else {
      setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    }
    setIsPlaying(true);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleEnd = () => {
    handleNextTrack();
  };

  return (
    <section className="bg-white min-h-screen flex flex-col items-center py-20">
      {/* Subtítulo Superior */}
      <h3 className="text-sm text-center font-medium tracking-wide text-gray-500 uppercase mb-2">
        XXX Campamento Musical Marqués de Mancera
      </h3>

      {/* Título Principal */}
      <h1 className="text-4xl font-bold text-orange-500 mb-8">
        Cápsulas Radiales
      </h1>

      <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg p-6">
        {/* Track Info */}
        <div className="flex items-center space-x-4">
          <img src={currentTrack.cover} alt="Cover Art" className="w-24 h-24 rounded-lg" />
          <div>
            <h2 className="text-white font-bold text-xl">{currentTrack.name}</h2>
            <p className="text-gray-400">{currentTrack.artist}</p>
            <p className="text-gray-500">{currentTrack.album}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max={duration.toString()}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6 space-x-4">
          <button
            onClick={() => setShuffle(!shuffle)}
            className={`text-gray-400 hover:text-orange-500 ${shuffle ? "text-orange-500" : ""}`}
          >
            <FaRandom size={24} />
          </button>
          <button
            onClick={handlePreviousTrack}
            className="text-gray-400 hover:text-orange-500"
          >
            <FaStepBackward size={24} />
          </button>
          <button
            onClick={togglePlay}
            className="bg-white text-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
          >
            {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
          </button>
          <button
            onClick={handleNextTrack}
            className="text-gray-400 hover:text-orange-500"
          >
            <FaStepForward size={24} />
          </button>
          <button
            onClick={() => setShowPlaylist(!showPlaylist)}
            className={`text-gray-400 hover:text-orange-500 ${
              showPlaylist ? "text-orange-500" : ""
            }`}
          >
            <FaList size={24} />
          </button>
        </div>

        {/* Playlist */}
        <div
          className={`mt-4 transition-all duration-500 overflow-hidden ${
            showPlaylist ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2">
            {tracks.map((track, index) => (
              <li
                key={index}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-md cursor-pointer ${
                  currentTrackIndex === index
                    ? "bg-gray-700 text-white"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {track.name} - {track.artist}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.url}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnd}
        autoPlay={isPlaying}
      />
    </section>
  );
}
