import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './componentes/layouts/BarraNavegacion.jsx';
import PiePagina from './componentes/layouts/PiePagina.jsx';
import { Inicio } from './modulos/inicio';
import { SobreMi } from './modulos/sobre-mi';
import { Proyectos, DetalleProyecto } from './modulos/proyectos';
import { Habilidades } from './modulos/habilidades';
import { Experiencia } from './modulos/experiencia';
import { Contacto } from './modulos/contacto';
import { RUTAS } from './configuracion/rutas';
import { useScrollToTop } from './logica/hooks';
import './App.css';

// Componente interno que usa el hook dentro del Router
function AppContent() {
  // Scroll automático al tope en cada cambio de ruta
  useScrollToTop();

  return (
    <div className="app-contenedor">
      <BarraNavegacion />
      
      <main className="contenido-principal">
        <Routes>
          <Route path={RUTAS.INICIO} element={<Inicio />} />
          <Route path={RUTAS.SOBRE_MI} element={<SobreMi />} />
          <Route path={RUTAS.PROYECTOS} element={<Proyectos />} />
          <Route path={RUTAS.PROYECTO_DETALLE} element={<DetalleProyecto />} />
          <Route path={RUTAS.HABILIDADES} element={<Habilidades />} />
          <Route path={RUTAS.EXPERIENCIA} element={<Experiencia />} />
          <Route path={RUTAS.CONTACTO} element={<Contacto />} />
        </Routes>
      </main>

      <PiePagina />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
