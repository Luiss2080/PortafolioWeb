import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './componentes/layouts';
import { Inicio } from './modulos/inicio';
import { SobreMi } from './modulos/sobre-mi';
import { Proyectos, DetalleProyecto } from './modulos/proyectos';
import { Habilidades } from './modulos/habilidades';
import { Experiencia } from './modulos/experiencia';
import { Contacto } from './modulos/contacto';
import { RUTAS } from './configuracion/rutas';
import { useScrollToTop } from './logica/hooks';
import './App.css';

// Componente para manejar el scroll
function ScrollHandler() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <MainLayout>
        <Routes>
          <Route path={RUTAS.INICIO} element={<Inicio />} />
          <Route path={RUTAS.SOBRE_MI} element={<SobreMi />} />
          <Route path={RUTAS.PROYECTOS} element={<Proyectos />} />
          <Route path={RUTAS.PROYECTO_DETALLE} element={<DetalleProyecto />} />
          <Route path={RUTAS.HABILIDADES} element={<Habilidades />} />
          <Route path={RUTAS.EXPERIENCIA} element={<Experiencia />} />
          <Route path={RUTAS.CONTACTO} element={<Contacto />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
