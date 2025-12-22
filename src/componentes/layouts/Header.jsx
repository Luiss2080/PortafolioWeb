// Componente Header principal del portafolio
import React, { useEffect, useState } from 'react';
import './estilos/Header.css';

const Header = ({ titulo, subtitulo, children, mostrarParticulas = true }) => {
  const [particulas, setParticulas] = useState([]);

  useEffect(() => {
    if (mostrarParticulas) {
      // Generar partículas aleatorias
      const nuevasParticulas = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4
      }));
      setParticulas(nuevasParticulas);
    }
  }, [mostrarParticulas]);

  return (
    <header className="header-layout">
      {/* Fondo animado con ondas */}
      <div className="header-ondas">
        <div className="header-onda header-onda-1"></div>
        <div className="header-onda header-onda-2"></div>
        <div className="header-onda header-onda-3"></div>
      </div>

      {/* Partículas flotantes */}
      {mostrarParticulas && (
        <div className="header-particulas">
          {particulas.map((particula) => (
            <div
              key={particula.id}
              className="particula"
              style={{
                left: `${particula.left}%`,
                animationDelay: `${particula.delay}s`,
                animationDuration: `${particula.duration}s`,
                width: `${particula.size}px`,
                height: `${particula.size}px`
              }}
            />
          ))}
        </div>
      )}

      {/* Grid de fondo */}
      <div className="header-grid"></div>

      {/* Contenido principal */}
      <div className="header-contenido">
        {titulo && (
          <div className="header-titulo-contenedor">
            <h1 className="header-titulo">
              {titulo.split('').map((letra, index) => (
                <span 
                  key={index} 
                  className="header-letra"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letra === ' ' ? '\u00A0' : letra}
                </span>
              ))}
            </h1>
            <div className="header-titulo-linea"></div>
          </div>
        )}
        
        {subtitulo && (
          <p className="header-subtitulo">
            <span className="header-subtitulo-texto">{subtitulo}</span>
          </p>
        )}
        
        {children && (
          <div className="header-contenido-extra">
            {children}
          </div>
        )}

        {/* Indicador de scroll */}
        <div className="header-scroll-indicador">
          <div className="scroll-mouse">
            <div className="scroll-rueda"></div>
          </div>
          <span className="scroll-texto">Desliza hacia abajo</span>
        </div>
      </div>

      {/* Efecto de brillo */}
      <div className="header-brillo"></div>
    </header>
  );
};

export default Header;
