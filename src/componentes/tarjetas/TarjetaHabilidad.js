// Componente de tarjeta de habilidad
import React from 'react';
import { motion } from 'framer-motion';
import './TarjetaHabilidad.css';

const TarjetaHabilidad = ({ habilidad, delay = 0 }) => {
  const { nombre, nivel, icono } = habilidad;

  return (
    <motion.div
      className="tarjeta-habilidad"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="header-habilidad">
        <span className="icono-habilidad">{icono}</span>
        <h4 className="nombre-habilidad">{nombre}</h4>
      </div>

      <div className="barra-progreso-contenedor">
        <motion.div
          className="barra-progreso"
          initial={{ width: 0 }}
          animate={{ width: `${nivel}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
        />
      </div>

      <span className="porcentaje-habilidad">{nivel}%</span>
    </motion.div>
  );
};

export default TarjetaHabilidad;
