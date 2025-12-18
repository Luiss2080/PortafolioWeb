// Componente de contenedor con animación de entrada
import React from 'react';
import { motion } from 'framer-motion';

const ContenedorAnimado = ({ children, className = '', animacion = 'fadeIn' }) => {
  const variantes = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    slideUp: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -50, opacity: 0 }
    },
    slideLeft: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0.8, opacity: 0 }
    }
  };

  const varianteSeleccionada = variantes[animacion] || variantes.fadeIn;

  return (
    <motion.div
      className={className}
      initial={varianteSeleccionada.initial}
      animate={varianteSeleccionada.animate}
      exit={varianteSeleccionada.exit}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ContenedorAnimado;
