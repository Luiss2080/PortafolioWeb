// Componente Badge/Etiqueta reutilizable
import React from 'react';
import './estilos/Badge.css';

const Badge = ({ 
  children, 
  tipo = 'default', 
  tamaño = 'medium',
  icono = null,
  className = '' 
}) => {
  const clases = `badge badge-${tipo} badge-${tamaño} ${className}`;

  return (
    <span className={clases}>
      {icono && <span className="badge-icono">{icono}</span>}
      <span className="badge-texto">{children}</span>
    </span>
  );
};

export default Badge;
