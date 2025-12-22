// Componente Header principal del portafolio
import React from 'react';
import './estilos/Header.css';

const Header = ({ titulo, subtitulo, children }) => {
  return (
    <header className="header-layout">
      <div className="header-contenido">
        {titulo && <h1 className="header-titulo">{titulo}</h1>}
        {subtitulo && <p className="header-subtitulo">{subtitulo}</p>}
        {children}
      </div>
    </header>
  );
};

export default Header;
