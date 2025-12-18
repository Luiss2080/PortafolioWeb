import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './componentes/navegacion/BarraNavegacion';
import PiePagina from './componentes/navegacion/PiePagina';
import Inicio from './vistas/Inicio';
import SobreMi from './vistas/SobreMi';
import Proyectos from './vistas/Proyectos';
import Habilidades from './vistas/Habilidades';
import Experiencia from './vistas/Experiencia';
import Contacto from './vistas/Contacto';
import { RUTAS } from './configuracion/rutas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-contenedor">
        <BarraNavegacion />
        
        <main className="contenido-principal">
          <Routes>
            <Route path={RUTAS.INICIO} element={<Inicio />} />
            <Route path={RUTAS.SOBRE_MI} element={<SobreMi />} />
            <Route path={RUTAS.PROYECTOS} element={<Proyectos />} />
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
