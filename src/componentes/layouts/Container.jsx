// Componente Container para mantener ancho máximo y padding consistente
import React from 'react';
import './estilos/Container.css';

const Container = ({ 
  children, 
  className = '',
  size = 'default' // 'small', 'default', 'large', 'full'
}) => {
  return (
    <div className={`container-layout container-${size} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
