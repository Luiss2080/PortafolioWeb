// Componente de tarjeta de experiencia
import React from 'react';
import { motion } from 'framer-motion';
import './estilos/TarjetaExperiencia.css';

const TarjetaExperiencia = ({ experiencia, index }) => {
  const { empresa, puesto, periodo, descripcion, logros, tecnologias } = experiencia;

  return (
    <motion.div
      className="tarjeta-experiencia"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <div className="timeline-punto"></div>
      
      <div className="contenido-experiencia">
        <div className="header-experiencia">
          <h3 className="puesto-experiencia">{puesto}</h3>
          <span className="periodo-experiencia">{periodo}</span>
        </div>

        <h4 className="empresa-experiencia">{empresa}</h4>
        <p className="descripcion-experiencia">{descripcion}</p>

        {logros && logros.length > 0 && (
          <ul className="lista-logros">
            {logros.map((logro, idx) => (
              <li key={idx}>{logro}</li>
            ))}
          </ul>
        )}

        {tecnologias && tecnologias.length > 0 && (
          <div className="tecnologias-experiencia">
            {tecnologias.map((tech, idx) => (
              <span key={idx} className="badge-tech">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TarjetaExperiencia;
