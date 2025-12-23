// Componente de pie de página
import React from 'react';
import { Link } from 'react-router-dom';
import { REDES_SOCIALES } from '../../configuracion/constantes';
import './estilos/Footer.css';

const Footer = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Luiss.dev</h3>
          <p className="footer-description">
            Portfolio profesional de desarrollo web
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Enlaces</h4>
          <ul className="footer-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Redes Sociales</h4>
          <div className="footer-social">
            <a href={REDES_SOCIALES.GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={REDES_SOCIALES.LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${REDES_SOCIALES.EMAIL}`}>
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {añoActual} Luiss.dev. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
