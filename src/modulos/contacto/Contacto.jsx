// Vista de Contacto
import React from 'react';
import ContenedorAnimado from '../componentes/animaciones/ContenedorAnimado';
import FormularioContacto from '../componentes/formularios/FormularioContacto';
import { REDES_SOCIALES } from '../configuracion/constantes';
import './estilos/Contacto.css';

const Contacto = () => {
  return (
    <ContenedorAnimado className="vista-contacto" animacion="slideUp">
      <div className="contenedor-contacto">
        <header className="header-seccion">
          <h1 className="titulo-seccion">Contacto</h1>
          <p className="descripcion-seccion">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </header>

        <div className="contenido-contacto">
          <div className="info-contacto">
            <h3 className="subtitulo-contacto">Conectemos</h3>
            <p className="texto-contacto">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones.
              No dudes en contactarme.
            </p>

            <div className="enlaces-contacto">
              <a
                href={`mailto:${REDES_SOCIALES.EMAIL}`}
                className="enlace-contacto email"
              >
                <span className="icono">✉️</span>
                <span>{REDES_SOCIALES.EMAIL}</span>
              </a>

              <a
                href={REDES_SOCIALES.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-contacto"
              >
                <span className="icono">🔗</span>
                <span>GitHub</span>
              </a>

              <a
                href={REDES_SOCIALES.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="enlace-contacto"
              >
                <span className="icono">💼</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="formulario-seccion">
            <h3 className="subtitulo-contacto">Envíame un Mensaje</h3>
            <FormularioContacto />
          </div>
        </div>
      </div>
    </ContenedorAnimado>
  );
};

export default Contacto;
