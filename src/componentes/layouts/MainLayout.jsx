// Layout principal que envuelve todas las páginas
import React from 'react';
import BarraNavegacion from '../navegacion/BarraNavegacion';
import Footer from './Footer';
import './estilos/MainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <BarraNavegacion />
      <main className="main-contenido">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
