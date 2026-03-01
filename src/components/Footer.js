// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* Columna 1: Info del Candidato */}
        <div className="footer-info">
          <h3>NELSON LÓPEZ</h3>
          <div className="candidato-detalles">
            <span className="partido">CAMBIO RADICAL - CR</span>
            <span className="numero">12</span>
          </div>
          <p>Unidos por nuestra comunidad. Este 8 de marzo, el cambio es con la gente.</p>
        </div>

        {/* Columna 2: Redes Sociales */}
        <div className="footer-social">
          <h4>SÍGUENOS</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/nelsonjalop" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/nelsonjalop" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@nelsonjalop" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>

        {/* Columna 3: Créditos */}
        <div className="footer-credits">
          <p>&copy; {anioActual} Campaña Nelson López. Todos los derechos reservados.</p>
          <p className="creador">
            Desarrollado por <strong>FrancoWebs</strong>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;