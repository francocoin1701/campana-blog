// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

// --- MÉTODO INFALIBLE: Importación directa de imágenes ---
// Subimos un nivel (../) para salir de la carpeta 'components' 
// y entramos a la nueva carpeta 'images' que acabas de mover a 'src'
import foto1 from '../images/foto1.jpeg';
import foto2 from '../images/foto2.jpeg';
import foto3 from '../images/foto3.jpeg';
import foto4 from '../images/foto4.jpeg';
import foto5 from '../images/foto5.jpeg';
import foto6 from '../images/foto6.jpeg';

// Ahora en 'src' usamos las variables que acabamos de importar, SIN comillas
const fotos =[
  { id: 1, src: foto1, alt: 'Comunidad reunida', titulo: 'Nuestra Comunidad' },
  { id: 2, src: foto2, alt: 'Líderes de la reunión', titulo: 'Liderazgo Local' },
  { id: 3, src: foto3, alt: 'Asistentes compartiendo ideas', titulo: 'Construyendo Ideas' },
  { id: 4, src: foto4, alt: 'Juventud presente en la campaña', titulo: 'Unidad y Compromiso' },
  { id: 5, src: foto5, alt: 'Mujeres apoyando el proyecto', titulo: 'Participacion Ciudadana' },
  { id: 6, src: foto6, alt: 'Gran asistencia a la reunión', titulo: 'La Fuerza Joven' }
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>El Reflejo de Nuestro Compromiso</h2>
        <p className="gallery-subtitle">Imágenes de una jornada histórica donde la comunidad fue la protagonista.</p>
        
        <div className="gallery-grid">
          {fotos.map((foto) => (
            <div key={foto.id} className="gallery-item">
              {/* Aquí se inyecta la imagen procesada por React */}
              <img src={foto.src} alt={foto.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <h3>{foto.titulo}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;