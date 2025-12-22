// Vista de Inicio/Home - Con estadísticas de GitHub
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContenedorAnimado from '../../componentes/animaciones/ContenedorAnimado.jsx';
import Cargador from '../../componentes/animaciones/Cargador.jsx';
import { obtenerPerfil, obtenerEstadisticas } from '../../logica/servicios/githubService';
import { useGitHub } from '../../logica/hooks';
import './Inicio.css';

const Inicio = () => {
  const { datos: perfil, cargando: cargandoPerfil } = useGitHub(obtenerPerfil);
  const { datos: estadisticas, cargando: cargandoStats } = useGitHub(obtenerEstadisticas);

  const cargando = cargandoPerfil || cargandoStats;

  return (
    <ContenedorAnimado className="vista-inicio" animacion="fadeIn">
      <div className="contenido-inicio">
        {/* Sección Hero */}
        <motion.div
          className="seccion-hero"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="avatar-container">
            {perfil?.avatar && (
              <img 
                src={perfil.avatar} 
                alt={perfil.nombre || 'Avatar'} 
                className="avatar-hero"
              />
            )}
            <div className="avatar-badge">
              <span className="badge-texto">LUISSXD</span>
            </div>
          </div>

          <h1 className="titulo-hero">
            <span className="saludo">Hola, soy</span>
            <span className="nombre-destacado">
              {perfil?.nombre || 'Luis Developer'}
            </span>
          </h1>
          
          <h2 className="subtitulo-hero">
            {perfil?.bio || 'Full Stack Developer & Tech Enthusiast'}
          </h2>

          <div className="info-rapida">
            {perfil?.ubicacion && (
              <span className="info-item">
                📍 {perfil.ubicacion}
              </span>
            )}
            {perfil?.empresa && (
              <span className="info-item">
                💼 {perfil.empresa}
              </span>
            )}
            <span className="info-item">
              💻 {estadisticas?.totalRepositorios || 0} Proyectos
            </span>
          </div>

          <div className="botones-hero">
            <Link to="/proyectos" className="boton-primario">
              <span>Ver Proyectos</span>
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z" fill="currentColor"/>
              </svg>
            </Link>
            <a 
              href={perfil?.url || 'https://github.com/Luiss2080'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="boton-secundario"
            >
              <svg viewBox="0 0 16 16" width="20" height="20">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
              </svg>
              <span>GitHub</span>
            </a>
            <Link to="/contacto" className="boton-secundario">
              <span>Contactar</span>
            </Link>
          </div>
        </motion.div>

        {/* Estadísticas */}
        {cargando ? (
          <div className="estadisticas-cargando">
            <Cargador texto="Cargando estadísticas..." />
          </div>
        ) : estadisticas && (
          <motion.div
            className="estadisticas-grid"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="stat-card">
              <div className="stat-icono">📊</div>
              <div className="stat-valor">{estadisticas.totalRepositorios}</div>
              <div className="stat-label">Repositorios</div>
            </div>

            <div className="stat-card destacado">
              <div className="stat-icono">⭐</div>
              <div className="stat-valor">{estadisticas.totalEstrellas}</div>
              <div className="stat-label">Total Estrellas</div>
            </div>

            <div className="stat-card">
              <div className="stat-icono">🔱</div>
              <div className="stat-valor">{estadisticas.totalForks}</div>
              <div className="stat-label">Total Forks</div>
            </div>

            <div className="stat-card">
              <div className="stat-icono">👥</div>
              <div className="stat-valor">{estadisticas.seguidores}</div>
              <div className="stat-label">Seguidores</div>
            </div>
          </motion.div>
        )}

        {/* Lenguajes principales */}
        {estadisticas?.lenguajesPrincipales && estadisticas.lenguajesPrincipales.length > 0 && (
          <motion.div
            className="seccion-lenguajes"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="seccion-titulo">Lenguajes más usados</h3>
            <div className="lenguajes-lista">
              {estadisticas.lenguajesPrincipales.map((item, index) => (
                <div key={index} className="lenguaje-item">
                  <div className="lenguaje-header">
                    <span className="lenguaje-nombre">{item.lenguaje}</span>
                    <span className="lenguaje-cantidad">{item.cantidad} repos</span>
                  </div>
                  <div className="lenguaje-barra">
                    <div 
                      className="lenguaje-progreso" 
                      style={{ 
                        width: `${(item.cantidad / estadisticas.totalRepositorios) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Proyecto destacado */}
        {estadisticas?.repositorioMasEstrellado && (
          <motion.div
            className="proyecto-destacado-hero"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <h3 className="seccion-titulo">🌟 Proyecto más popular</h3>
            <a 
              href={estadisticas.repositorioMasEstrellado.url}
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-card-hero"
            >
              <div className="proyecto-header">
                <h4>{estadisticas.repositorioMasEstrellado.nombre}</h4>
                <div className="proyecto-stats-mini">
                  <span>⭐ {estadisticas.repositorioMasEstrellado.estrellas}</span>
                  <span>🔱 {estadisticas.repositorioMasEstrellado.forks}</span>
                </div>
              </div>
              <p>{estadisticas.repositorioMasEstrellado.descripcion || 'Sin descripción'}</p>
              {estadisticas.repositorioMasEstrellado.lenguaje && (
                <span className="lenguaje-badge-mini">
                  {estadisticas.repositorioMasEstrellado.lenguaje}
                </span>
              )}
            </a>
          </motion.div>
        )}
      </div>
    </ContenedorAnimado>
  );
};

export default Inicio;
