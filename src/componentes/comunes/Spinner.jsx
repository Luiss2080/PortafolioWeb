// Componente común de Spinner/Loader simple
import React from 'react';
import './estilos/Spinner.css';

const Spinner = ({ tamaño = 'medium', color = '#ff0000' }) => {
  return (
    <div className={`spinner spinner-${tamaño}`}>
      <div className="spinner-circle" style={{ borderTopColor: color }}></div>
    </div>
  );
};

export default Spinner;
