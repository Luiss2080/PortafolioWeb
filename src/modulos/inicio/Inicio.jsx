// Vista de Inicio/Home - Con estadísticas de GitHub
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaStar, FaCodeBranch, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import ContenedorAnimado from '../../componentes/animaciones/ContenedorAnimado.jsx';
import Cargador from '../../componentes/animaciones/Cargador.jsx';
import Header from '../../componentes/layouts/Header.jsx';
import { obtenerEstadisticas } from '../../logica/servicios/githubService';
import { useGitHub } from '../../logica/hooks';
import './Inicio.css';

const Inicio = () => {
  const { datos: estadisticas, cargando: cargandoStats } = useGitHub(obtenerEstadisticas);

  return (
    <ContenedorAnimado className="vista-inicio" animacion="fadeIn">
      <Header />
      
      <div className="contenido-inicio" style={{ padding: '4rem 2rem' }}>
        {/* Estadísticas */}
        {cargandoStats ? (
          <div className="estadisticas-cargando">
            <Cargador texto="Cargando estadísticas..." />
          </div>
        ) : estadisticas && (
          <>
            <motion.div
              className="estadisticas-grid"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="stat-card">
                <div className="stat-icono"><FaCode /></div>
                <div className="stat-valor">{estadisticas.totalRepositorios}</div>
                <div className="stat-label">Repositorios</div>
              </div>

              <div className="stat-card destacado">
                <div className="stat-icono"><FaStar /></div>
                <div className="stat-valor">{estadisticas.totalEstrellas}</div>
                <div className="stat-label">Total Estrellas</div>
              </div>

              <div className="stat-card">
                <div className="stat-icono"><FaCodeBranch /></div>
                <div className="stat-valor">{estadisticas.totalForks}</div>
                <div className="stat-label">Total Forks</div>
              </div>

              <div className="stat-card">
                <div className="stat-icono"><FaUsers /></div>
                <div className="stat-valor">{estadisticas.seguidores}</div>
                <div className="stat-label">Seguidores</div>
              </div>
            </motion.div>

            {/* Lenguajes principales */}
            {estadisticas?.lenguajesPrincipales && estadisticas.lenguajesPrincipales.length > 0 && (
              <motion.div
                className="seccion-lenguajes"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3 className="seccion-titulo">
                  <span className="titulo-icono"><FaCode /></span>
                  Lenguajes más usados
                </h3>
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
                <h3 className="seccion-titulo">
                  <span className="titulo-icono"><FaStar /></span>
                  Proyecto más popular
                </h3>
                <a 
                  href={estadisticas.repositorioMasEstrellado.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proyecto-card-hero"
                >
                  <div className="proyecto-header">
                    <h4>{estadisticas.repositorioMasEstrellado.nombre}</h4>
                    <div className="proyecto-stats-mini">
                      <span><FaStar /> {estadisticas.repositorioMasEstrellado.estrellas}</span>
                      <span><FaCodeBranch /> {estadisticas.repositorioMasEstrellado.forks}</span>
                      <FaExternalLinkAlt className="link-icon" />
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
          </>
        )}
      </div>
    </ContenedorAnimado>
  );
};

export default Inicio;
