// Ejemplo de uso del Header con todas las funcionalidades
import React from 'react';
import { Header } from '../../componentes/layouts';

// Ejemplo 1: Header Simple
export const HeaderSimpleEjemplo = () => (
  <Header 
    titulo="Mi Portafolio"
    subtitulo="Desarrollador Full Stack apasionado por crear soluciones innovadoras"
  />
);

// Ejemplo 2: Header con Perfil (RECOMENDADO para página de inicio)
export const HeaderConPerfilEjemplo = () => (
  <Header 
    titulo="Bienvenido"
    subtitulo="const developer = { passion: 'code', mission: 'innovate' };"
    mostrarPerfil={true}
    mostrarStats={true}
    mostrarBotones={true}
    mostrarParticulas={true}
  />
);

// Ejemplo 3: Header sin partículas (mejor rendimiento)
export const HeaderLimpioEjemplo = () => (
  <Header 
    titulo="Proyectos"
    subtitulo="Explora mi trabajo y contribuciones"
    mostrarParticulas={false}
  />
);

// Ejemplo 4: Header con contenido personalizado
export const HeaderConContenidoEjemplo = () => (
  <Header 
    titulo="Contacto"
    subtitulo="¿Tienes un proyecto en mente?"
    mostrarBotones={true}
  >
    <div className="contenido-personalizado">
      <p>Contenido adicional aquí</p>
    </div>
  </Header>
);

export default HeaderConPerfilEjemplo;
