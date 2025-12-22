// Vista de Experiencia
import React from 'react';
import ContenedorAnimado from '../../componentes/animaciones/ContenedorAnimado.jsx';
import TarjetaExperiencia from '../../componentes/tarjetas/TarjetaExperiencia.jsx';
import { experienciaLaboral } from '../../datos/estaticos/experiencia';
import './Experiencia.css';

const Experiencia = () => {
  return (
    <ContenedorAnimado className="vista-experiencia" animacion="slideUp">
      <div className="contenedor-experiencia">
        <header className="header-seccion">
          <h1 className="titulo-seccion">Experiencia Laboral</h1>
          <p className="descripcion-seccion">
            Mi trayectoria profesional en desarrollo de software
          </p>
        </header>

        <div className="timeline-experiencia">
          {experienciaLaboral.map((exp, index) => (
            <TarjetaExperiencia
              key={exp.id}
              experiencia={exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </ContenedorAnimado>
  );
};

export default Experiencia;
