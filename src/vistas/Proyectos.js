// Vista de Proyectos
import React from 'react';
import ContenedorAnimado from '../componentes/animaciones/ContenedorAnimado';
import TarjetaProyecto from '../componentes/tarjetas/TarjetaProyecto';
import { proyectos } from '../datos/proyectos';
import './Proyectos.css';

const Proyectos = () => {
  const proyectosDestacados = proyectos.filter(p => p.destacado);
  const otrosProyectos = proyectos.filter(p => !p.destacado);

  return (
    <ContenedorAnimado className="vista-proyectos" animacion="slideUp">
      <div className="contenedor-proyectos">
        <header className="header-seccion">
          <h1 className="titulo-seccion">Mis Proyectos</h1>
          <p className="descripcion-seccion">
            Algunos de los proyectos en los que he trabajado
          </p>
        </header>

        {proyectosDestacados.length > 0 && (
          <section className="seccion-destacados">
            <h2 className="subtitulo-seccion">Proyectos Destacados</h2>
            <div className="grid-proyectos">
              {proyectosDestacados.map(proyecto => (
                <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>
          </section>
        )}

        {otrosProyectos.length > 0 && (
          <section className="seccion-otros">
            <h2 className="subtitulo-seccion">Otros Proyectos</h2>
            <div className="grid-proyectos">
              {otrosProyectos.map(proyecto => (
                <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
              ))}
            </div>
          </section>
        )}
      </div>
    </ContenedorAnimado>
  );
};

export default Proyectos;
