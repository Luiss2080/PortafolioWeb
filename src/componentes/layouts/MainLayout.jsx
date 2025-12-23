import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { RUTAS } from '../../configuracion/rutas';
import './estilos/MainLayout.css';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const esInicio = location.pathname === RUTAS.INICIO;

  return (
    <div className="layout-principal">
      <Header />
      
      <main className={`layout-contenido ${!esInicio ? 'con-espaciado-superior' : ''}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
