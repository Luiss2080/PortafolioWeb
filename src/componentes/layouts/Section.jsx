// Componente Section reutilizable para secciones del portafolio
import React from 'react';
import './estilos/Section.css';

const Section = ({ 
  id, 
  titulo, 
  subtitulo, 
  children, 
  className = '',
  variante = 'default' // 'default', 'dark', 'accent'
}) => {
  return (
    <section 
      id={id} 
      className={`section-layout section-${variante} ${className}`}
    >
      <div className="section-contenedor">
        {(titulo || subtitulo) && (
          <div className="section-header">
            {titulo && <h2 className="section-titulo">{titulo}</h2>}
            {subtitulo && <p className="section-subtitulo">{subtitulo}</p>}
          </div>
        )}
        <div className="section-contenido">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
