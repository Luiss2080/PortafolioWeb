// Componente de tarjeta de proyecto con integración GitHub
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animacionEscala } from '../../configuracion/animaciones';
import './estilos/TarjetaProyecto.css';

const TarjetaProyecto = ({ proyecto }) => {
  const { 
    nombre,
    descripcion, 
    lenguaje,
    temas = [],
    url, 
    homepage,
    estrellas,
    forks,
    fechaActualizacion
  } = proyecto;

  // Formatear fecha
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    const ahora = new Date();
    const diferencia = Math.floor((ahora - date) / (1000 * 60 * 60 * 24));
    
    if (diferencia === 0) return 'Hoy';
    if (diferencia === 1) return 'Ayer';
    if (diferencia < 30) return `${diferencia} días atrás`;
    
    const meses = Math.floor(diferencia / 30);
    if (meses < 12) return `${meses} ${meses === 1 ? 'mes' : 'meses'} atrás`;
    
    const años = Math.floor(meses / 12);
    return `${años} ${años === 1 ? 'año' : 'años'} atrás`;
  };

  return (
    <motion.div
      className="tarjeta-proyecto"
      {...animacionEscala}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      {/* Indicador de actividad */}
      <div className="indicador-actividad">
        <span className="punto-verde"></span>
        {formatearFecha(fechaActualizacion)}
      </div>

      {/* Contenido principal */}
      <div className="contenido-proyecto">
        <h3 className="titulo-proyecto">{nombre}</h3>
        <p className="descripcion-proyecto">
          {descripcion || 'Sin descripción disponible'}
        </p>

        {/* Lenguaje principal */}
        {lenguaje && (
          <div className="lenguaje-badge">
            <span className="lenguaje-punto"></span>
            {lenguaje}
          </div>
        )}

        {/* Temas/Tags */}
        {temas.length > 0 && (
          <div className="tecnologias">
            {temas.slice(0, 3).map((tema, index) => (
              <span key={index} className="badge-tecnologia">
                {tema}
              </span>
            ))}
            {temas.length > 3 && (
              <span className="badge-tecnologia mas">+{temas.length - 3}</span>
            )}
          </div>
        )}

        {/* Estadísticas */}
        <div className="estadisticas-proyecto">
          <div className="stat">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" fill="currentColor"/>
            </svg>
            <span>{estrellas}</span>
          </div>
          
          <div className="stat">
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="currentColor"/>
            </svg>
            <span>{forks}</span>
          </div>
        </div>
      </div>

      {/* Enlace al proyecto */}
      <div className="acciones-proyecto">
        <Link
          to={`/proyectos/${nombre}`}
          className="boton-proyecto boton-ver-mas"
          title="Ver detalles"
        >
          <span>Ver más</span>
          <svg viewBox="0 0 16 16" width="14" height="14">
            <path d="M8.636 3.5l.774-.776L13.364 6.5l.776.776-4 4-.776-.776 2.644-2.644H3v-1.112h9.008L9.364 4.276z" fill="currentColor"/>
          </svg>
        </Link>
        
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="boton-proyecto boton-github"
          title="Ver en GitHub"
        >
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
          </svg>
        </a>
        
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="boton-proyecto boton-demo"
            title="Ver demo"
          >
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M3.75 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 013.75 2zm8.25.75a.75.75 0 00-1.5 0v5.69L8.78 6.97a.75.75 0 00-1.06 1.06l3.25 3.25a.75.75 0 001.06 0l3.25-3.25a.75.75 0 00-1.06-1.06l-1.72 1.72V2.75z" fill="currentColor"/>
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default TarjetaProyecto;
