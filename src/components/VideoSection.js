// src/components/VideoSection.js
import React from 'react';
import './VideoSection.css';

// Importamos los videos directamente desde la carpeta src/videos
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';

const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <h2>La Voz de Nuestra Comunidad</h2>
        <p className="video-subtitle">
          Escucha a los líderes y ciudadanos que están construyendo este movimiento paso a paso.
        </p>

        <div className="video-grid">
          
          {/* --- VIDEO 1 (Normal) --- */}
          <div className="video-wrapper">
            <video controls preload="metadata" className="local-video">
              <source src={video1} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>

          {/* --- VIDEO 2 (Girado a la izquierda) --- */}
          <div className="video-wrapper">
            {/* Agregamos la clase "video-girado" aquí */}
            <video controls preload="metadata" className="local-video video-girado">
              <source src={video2} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;