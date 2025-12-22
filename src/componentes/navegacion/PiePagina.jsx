// Componente de pie de página
import React from 'react';
import { Link } from 'react-router-dom';
import { REDES_SOCIALES } from '../../configuracion/constantes';
import './estilos/PiePagina.css';

const PiePagina = () => {
  const añoActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <div className="contenedor-pie">
        <div className="seccion-pie">
          <h3 className="titulo-seccion">Luiss.dev</h3>
          <p className="descripcion-pie">
            Portfolio profesional de desarrollo web
          </p>
        </div>

        <div className="seccion-pie">
          <h4 className="subtitulo-pie">Enlaces</h4>
          <ul className="lista-enlaces">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="seccion-pie">
          <h4 className="subtitulo-pie">Redes Sociales</h4>
          <div className="iconos-redes">
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

      <div className="copyright">
        <p>&copy; {añoActual} Luiss.dev. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default PiePagina;
