// Vista de Detalle de Proyecto
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch, FaArrowLeft, FaCalendar, FaCode } from 'react-icons/fa';
import ContenedorAnimado from '../componentes/animaciones/ContenedorAnimado.jsx';
import Cargador from '../componentes/animaciones/Cargador.jsx';
import { obtenerRepositorio } from '../logica/servicios/githubService';
import './estilos/DetalleProyecto.css';

const DetalleProyecto = () => {
  const { nombreRepo } = useParams();
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [readme, setReadme] = useState('');
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const cargarProyecto = async () => {
      try {
        setCargando(true);
        const datos = await obtenerRepositorio(nombreRepo);
        setProyecto(datos);

        // Obtener README
        try {
          const readmeResponse = await fetch(`https://api.github.com/repos/Luiss2080/${nombreRepo}/readme`);
          if (readmeResponse.ok) {
            const readmeData = await readmeResponse.json();
            const readmeContent = atob(readmeData.content);
            setReadme(readmeContent);
          }
        } catch (err) {
          console.log('No se pudo cargar el README');
        }

        // Obtener commits recientes
        try {
          const commitsResponse = await fetch(`https://api.github.com/repos/Luiss2080/${nombreRepo}/commits?per_page=5`);
          if (commitsResponse.ok) {
            const commitsData = await commitsResponse.json();
            setCommits(commitsData);
          }
        } catch (err) {
          console.log('No se pudieron cargar los commits');
        }

      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    if (nombreRepo) {
      cargarProyecto();
    }
  }, [nombreRepo]);

  if (cargando) {
    return <Cargador texto="Cargando proyecto..." />;
  }

  if (error || !proyecto) {
    return (
      <ContenedorAnimado className="vista-detalle-proyecto" animacion="fadeIn">
        <div className="error-contenedor">
          <h2>❌ Proyecto no encontrado</h2>
          <p>{error || 'No se pudo cargar el proyecto'}</p>
          <Link to="/proyectos" className="boton-volver">
            <FaArrowLeft /> Volver a Proyectos
          </Link>
        </div>
      </ContenedorAnimado>
    );
  }

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <ContenedorAnimado className="vista-detalle-proyecto" animacion="fadeIn">
      <div className="contenedor-detalle">
        {/* Header del proyecto */}
        <motion.div 
          className="header-proyecto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => navigate(-1)} className="boton-volver-simple">
            <FaArrowLeft /> Volver
          </button>

          <h1 className="titulo-proyecto">{proyecto.nombre}</h1>
          <p className="descripcion-proyecto">{proyecto.descripcion || 'Sin descripción'}</p>

          <div className="estadisticas-header">
            <div className="stat-item">
              <FaStar className="icono-stat" />
              <span>{proyecto.estrellas}</span>
              <span className="label-stat">Estrellas</span>
            </div>
            <div className="stat-item">
              <FaCodeBranch className="icono-stat" />
              <span>{proyecto.forks}</span>
              <span className="label-stat">Forks</span>
            </div>
            <div className="stat-item">
              <FaCode className="icono-stat" />
              <span>{proyecto.lenguaje || 'N/A'}</span>
              <span className="label-stat">Lenguaje</span>
            </div>
          </div>

          <div className="acciones-proyecto">
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer" className="boton-accion">
              <FaGithub /> Ver en GitHub
            </a>
            {proyecto.homepage && (
              <a href={proyecto.homepage} target="_blank" rel="noopener noreferrer" className="boton-accion secundario">
                <FaExternalLinkAlt /> Ver Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Información del proyecto */}
        <div className="grid-informacion">
          {/* README */}
          {readme && (
            <motion.div 
              className="seccion-readme"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="titulo-seccion">📖 README</h2>
              <div className="contenido-readme">
                <pre>{readme.slice(0, 1000)}...</pre>
              </div>
            </motion.div>
          )}

          {/* Tecnologías */}
          {proyecto.temas && proyecto.temas.length > 0 && (
            <motion.div 
              className="seccion-tecnologias"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="titulo-seccion">🛠️ Tecnologías</h2>
              <div className="grid-tecnologias">
                {proyecto.temas.map((tema, index) => (
                  <span key={index} className="badge-tecnologia">
                    {tema}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Commits recientes */}
          {commits.length > 0 && (
            <motion.div 
              className="seccion-commits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="titulo-seccion">📝 Commits Recientes</h2>
              <div className="lista-commits">
                {commits.map((commit, index) => (
                  <div key={index} className="commit-item">
                    <div className="commit-avatar">
                      <img src={commit.author?.avatar_url} alt={commit.commit.author.name} />
                    </div>
                    <div className="commit-info">
                      <p className="commit-mensaje">{commit.commit.message}</p>
                      <p className="commit-meta">
                        <FaCalendar className="icono-inline" />
                        {formatearFecha(commit.commit.author.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Información adicional */}
          <motion.div 
            className="seccion-info-adicional"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="titulo-seccion">ℹ️ Información</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Creado:</span>
                <span className="info-valor">{formatearFecha(proyecto.fechaCreacion)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Última actualización:</span>
                <span className="info-valor">{formatearFecha(proyecto.fechaActualizacion)}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Licencia:</span>
                <span className="info-valor">{proyecto.licencia || 'No especificada'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Rama principal:</span>
                <span className="info-valor">{proyecto.ramaDefault || 'main'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ContenedorAnimado>
  );
};

export default DetalleProyecto;
