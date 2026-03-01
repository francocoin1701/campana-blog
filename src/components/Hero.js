// src/components/Hero.js

import React from 'react';
import './Hero.css'; // Importamos los estilos que crearemos para este componente específico

const Hero = () => {
  return (
    // Usamos etiquetas semánticas como <section> que es bueno para el SEO
    <section className="hero-container">
      <div className="hero-content">
        {/* Este es el mensaje principal y potente */}
        <h1>LA FUERZA DE NUESTRA GENTE</h1>
        
        {/* Este es el párrafo que da contexto. ¡Recuerda cambiar los datos! */}
        <p>
          El pasado [28 de febrero], la comunidad de [Nucuuca] se unió con un solo propósito: demostrar que juntos somos imparables. Esta es la crónica de un día donde los líderes y la gente tomaron la palabra.
        </p>
      </div>
    </section>
  );
}

export default Hero;