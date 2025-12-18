// Vista de Habilidades
import React from 'react';
import ContenedorAnimado from '../componentes/animaciones/ContenedorAnimado';
import TarjetaHabilidad from '../componentes/tarjetas/TarjetaHabilidad';
import { habilidadesTecnicas } from '../datos/habilidades';
import './Habilidades.css';

const Habilidades = () => {
  return (
    <ContenedorAnimado className="vista-habilidades" animacion="slideUp">
      <div className="contenedor-habilidades">
        <header className="header-seccion">
          <h1 className="titulo-seccion">Habilidades</h1>
          <p className="descripcion-seccion">
            Tecnologías y herramientas que domino
          </p>
        </header>

        <div className="categorias-habilidades">
          {habilidadesTecnicas.map((categoria, catIndex) => (
            <section key={catIndex} className="categoria-seccion">
              <h2 className="titulo-categoria">{categoria.categoria}</h2>
              <div className="grid-habilidades">
                {categoria.items.map((habilidad, habIndex) => (
                  <TarjetaHabilidad
                    key={habIndex}
                    habilidad={habilidad}
                    delay={catIndex * 0.1 + habIndex * 0.05}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </ContenedorAnimado>
  );
};

export default Habilidades;
