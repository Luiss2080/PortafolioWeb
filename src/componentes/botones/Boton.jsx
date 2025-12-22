// Componente de botón reutilizable
import React from 'react';
import { motion } from 'framer-motion';
import './estilos/Boton.css';

const Boton = ({ 
  children, 
  tipo = 'primario', 
  onClick, 
  disabled = false, 
  icono = null,
  tamaño = 'medium',
  className = '',
  ...props 
}) => {
  const clases = `boton boton-${tipo} boton-${tamaño} ${disabled ? 'boton-disabled' : ''} ${className}`;

  return (
    <motion.button
      className={clases}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      {icono && <span className="boton-icono">{icono}</span>}
      <span className="boton-texto">{children}</span>
    </motion.button>
  );
};

export default Boton;
