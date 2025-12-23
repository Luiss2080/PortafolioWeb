import React from 'react';
import { useLocation } from 'react-router-dom';
import BarraNavegacion from './BarraNavegacion';
import PiePagina from './PiePagina';
import { RUTAS } from '../../configuracion/rutas';
import './estilos/MainLayout.css';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const esInicio = location.pathname === RUTAS.INICIO;

  return (
    <div className="layout-principal">
      <BarraNavegacion />
      
      <main className={`layout-contenido ${!esInicio ? 'con-espaciado-superior' : ''}`}>
        {children}
      </main>

      <PiePagina />
    </div>
  );
};

export default MainLayout;
