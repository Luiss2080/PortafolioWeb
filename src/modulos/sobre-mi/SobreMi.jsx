// Vista de Sobre Mí
import React from 'react';
import { motion } from 'framer-motion';
import ContenedorAnimado from '../../componentes/animaciones/ContenedorAnimado.jsx';
import { sobreMi, informacionPersonal } from '../../datos/estaticos/perfil';
import './SobreMi.css';

const SobreMi = () => {
  return (
    <ContenedorAnimado className="vista-sobre-mi" animacion="fadeIn">
      <div className="contenedor-sobre-mi">
        <header className="header-seccion">
          <h1 className="titulo-seccion">Sobre Mí</h1>
        </header>

        <div className="contenido-sobre-mi">
          <motion.div
            className="intro-sobre-mi"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="saludo">{sobreMi.intro}</h2>
            
            {sobreMi.parrafos.map((parrafo, index) => (
              <p key={index} className="parrafo-sobre-mi">{parrafo}</p>
            ))}
          </motion.div>

          <motion.div
            className="intereses-sobre-mi"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="titulo-intereses">Áreas de Interés</h3>
            <ul className="lista-intereses">
              {sobreMi.intereses.map((interes, index) => (
                <li key={index} className="item-interes">
                  <span className="icono-interes">✨</span>
                  {interes}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="info-adicional"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="tarjeta-info">
            <span className="icono-info">📍</span>
            <div>
              <h4>Ubicación</h4>
              <p>{informacionPersonal.ubicacion}</p>
            </div>
          </div>

          <div className="tarjeta-info">
            <span className="icono-info">💼</span>
            <div>
              <h4>Estado</h4>
              <p>{informacionPersonal.disponibilidad}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </ContenedorAnimado>
  );
};

export default SobreMi;
