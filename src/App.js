import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './componentes/navegacion/BarraNavegacion.jsx';
import PiePagina from './componentes/navegacion/PiePagina.jsx';
import Inicio from './vistas/Inicio.jsx';
import SobreMi from './vistas/SobreMi.jsx';
import Proyectos from './vistas/Proyectos.jsx';
import DetalleProyecto from './vistas/DetalleProyecto.jsx';
import Habilidades from './vistas/Habilidades.jsx';
import Experiencia from './vistas/Experiencia.jsx';
import Contacto from './vistas/Contacto.jsx';
import { RUTAS } from './configuracion/rutas';
import { useScrollToTop } from './logica/hooks';
import './App.css';

function App() {
  // Scroll automático al tope en cada cambio de ruta
  useScrollToTop();

  return (
    <Router>
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
    </Router>
  );
}

export default App;
