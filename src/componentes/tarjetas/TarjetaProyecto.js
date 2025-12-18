// Componente de tarjeta de proyecto
import React from 'react';
import { motion } from 'framer-motion';
import { animacionEscala } from '../../configuracion/animaciones';
import './TarjetaProyecto.css';

const TarjetaProyecto = ({ proyecto }) => {
  const { titulo, descripcion, tecnologias, imagen, url, destacado } = proyecto;

  return (
    <motion.div
      className={`tarjeta-proyecto ${destacado ? 'destacado' : ''}`}
      {...animacionEscala}
      whileHover={{ scale: 1.05 }}
    >
      <div className="imagen-proyecto">
        <img src={imagen} alt={titulo} loading="lazy" />
        {destacado && <span className="badge-destacado">Destacado</span>}
      </div>

      <div className="contenido-proyecto">
        <h3 className="titulo-proyecto">{titulo}</h3>
        <p className="descripcion-proyecto">{descripcion}</p>

        <div className="tecnologias">
          {tecnologias.map((tech, index) => (
            <span key={index} className="badge-tecnologia">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-ver-proyecto"
        >
          Ver Proyecto →
        </a>
      </div>
    </motion.div>
  );
};

export default TarjetaProyecto;
