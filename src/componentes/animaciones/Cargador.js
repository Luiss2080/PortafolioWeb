// Componente de cargador animado
import React from 'react';
import { motion } from 'framer-motion';
import './estilos/Cargador.css';

const Cargador = ({ mensaje = 'Cargando...' }) => {
  return (
    <div className="contenedor-cargador">
      <div className="cargador">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="punto-cargador"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
      </div>
      {mensaje && <p className="mensaje-cargador">{mensaje}</p>}
    </div>
  );
};

export default Cargador;
