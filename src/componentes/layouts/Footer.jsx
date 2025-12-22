// Componente Footer principal del portafolio
import React from 'react';
import { Link } from 'react-router-dom';
import { REDES_SOCIALES } from '../../configuracion/constantes';
import './estilos/Footer.css';

const Footer = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="footer-layout">
      <div className="footer-contenedor">
        {/* Sección Información */}
        <div className="footer-seccion">
          <h3 className="footer-titulo">Luiss.dev</h3>
          <p className="footer-descripcion">
            Desarrollador Full Stack especializado en crear experiencias web modernas y funcionales.
          </p>
        </div>

        {/* Sección Enlaces Rápidos */}
        <div className="footer-seccion">
          <h4 className="footer-subtitulo">Navegación</h4>
          <ul className="footer-lista">
            <li><Link to="/" className="footer-enlace">Inicio</Link></li>
            <li><Link to="/proyectos" className="footer-enlace">Proyectos</Link></li>
            <li><Link to="/habilidades" className="footer-enlace">Habilidades</Link></li>
            <li><Link to="/experiencia" className="footer-enlace">Experiencia</Link></li>
            <li><Link to="/sobre-mi" className="footer-enlace">Sobre Mí</Link></li>
            <li><Link to="/contacto" className="footer-enlace">Contacto</Link></li>
          </ul>
        </div>

        {/* Sección Redes Sociales */}
        <div className="footer-seccion">
          <h4 className="footer-subtitulo">Conéctate</h4>
          <div className="footer-redes">
            <a 
              href={REDES_SOCIALES.GITHUB} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-red"
              aria-label="GitHub"
            >
              <span>GitHub</span>
            </a>
            <a 
              href={REDES_SOCIALES.LINKEDIN} 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-red"
              aria-label="LinkedIn"
            >
              <span>LinkedIn</span>
            </a>
            <a 
              href={`mailto:${REDES_SOCIALES.EMAIL}`}
              className="footer-red"
              aria-label="Email"
            >
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Sección Contacto */}
        <div className="footer-seccion">
          <h4 className="footer-subtitulo">Contacto</h4>
          <div className="footer-contacto">
            <p className="footer-texto">
              <strong>Email:</strong> {REDES_SOCIALES.EMAIL}
            </p>
            <p className="footer-texto">
              <strong>Ubicación:</strong> Disponible para trabajo remoto
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {añoActual} Luiss.dev. Todos los derechos reservados.</p>
        <p className="footer-desarrollado">
          Desarrollado con React • Diseñado con pasión
        </p>
      </div>
    </footer>
  );
};

export default Footer;
