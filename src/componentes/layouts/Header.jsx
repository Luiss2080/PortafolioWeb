// Componente Header principal del portafolio
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obtenerPerfil } from '../../logica/servicios/githubService';
import { useGitHub } from '../../logica/hooks';
import { informacionPersonal } from '../../datos/estaticos/perfil';
import { REDES_SOCIALES } from '../../configuracion/constantes';
import './estilos/Header.css';

const Header = ({ 
  titulo, 
  subtitulo, 
  children, 
  mostrarParticulas = true,
  mostrarPerfil = true,
  mostrarStats = true,
  mostrarBotones = true 
}) => {
  const [particulas, setParticulas] = useState([]);
  const [typedText, setTypedText] = useState('');
  const { datos: perfilGithub, cargando } = useGitHub(obtenerPerfil);

  // Combinar datos de GitHub con datos estáticos
  const perfil = {
    nombre: perfilGithub?.nombre || informacionPersonal.nombre,
    bio: perfilGithub?.bio || informacionPersonal.titulo,
    avatar: perfilGithub?.avatar || informacionPersonal.imagenPerfil,
    ubicacion: perfilGithub?.ubicacion || informacionPersonal.ubicacion,
    blog: perfilGithub?.blog || '',
    html_url: perfilGithub?.html_url || REDES_SOCIALES.GITHUB
  };

  const textoAnimado = subtitulo || informacionPersonal.subtitulo;

  // Efecto de escritura automática
  useEffect(() => {
    if (textoAnimado) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(textoAnimado.slice(0, index));
        index++;
        if (index > textoAnimado.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [textoAnimado]);

  useEffect(() => {
    if (mostrarParticulas) {
      const nuevasParticulas = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4,
        opacity: Math.random() * 0.5 + 0.1
      }));
      setParticulas(nuevasParticulas);
    }
  }, [mostrarParticulas]);

  return (
    <header className="header-layout">
      {/* Fondo animado con ondas y grid */}
      <div className="header-fondo">
        <div className="header-grid"></div>
        <div className="header-ondas">
          <div className="header-onda header-onda-1"></div>
          <div className="header-onda header-onda-2"></div>
        </div>
        <div className="header-glow"></div>
      </div>

      {/* Partículas flotantes */}
      {mostrarParticulas && (
        <div className="header-particulas">
          {particulas.map((particula) => (
            <div
              key={particula.id}
              className="particula"
              style={{
                left: `${particula.left}%`,
                animationDelay: `${particula.delay}s`,
                animationDuration: `${particula.duration}s`,
                width: `${particula.size}px`,
                height: `${particula.size}px`,
                opacity: particula.opacity
              }}
            />
          ))}
        </div>
      )}

      <div className="header-contenido">
        <div className="header-grid-layout">
          
          {/* Columna Izquierda: Texto y CTA */}
          <div className="header-info">
            <div className="badge-tech">
              <span className="badge-dot"></span>
              <span className="badge-text">Disponible para proyectos</span>
            </div>
            
            <h1 className="header-titulo">
              <span className="titulo-linea">Hola, soy</span>
              <span className="titulo-nombre">{perfil.nombre}</span>
            </h1>

            <div className="header-subtitulo-container">
              <span className="header-subtitulo">{typedText}</span>
              <span className="cursor-blink">|</span>
            </div>

            <p className="header-descripcion">
              {informacionPersonal.descripcion}
            </p>

            {mostrarBotones && (
              <div className="header-botones">
                <Link to="/proyectos" className="btn-tech btn-primario">
                  Ver Proyectos
                  <span className="btn-icon"></span>
                </Link>
                <Link to="/contacto" className="btn-tech btn-secundario">
                  Contactar
                </Link>
              </div>
            )}

            {/* Redes Sociales */}
            <div className="header-sociales">
              {Object.entries(REDES_SOCIALES).map(([red, url]) => (
                <a 
                  key={red} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={red}
                >
                  {red}
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Card de Perfil */}
          {mostrarPerfil && (
            <div className="header-visual">
              <div className="perfil-card-container">
                <div className="tech-ring ring-1"></div>
                <div className="tech-ring ring-2"></div>
                
                <div className="perfil-card">
                  <div className="card-header">
                    <div className="card-status">
                      <span className="status-indicator"></span>
                      ONLINE
                    </div>
                    <div className="card-dots">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  
                  <div className="card-image-container">
                    <img 
                      src={perfil.avatar} 
                      alt={perfil.nombre} 
                      className="card-avatar"
                    />
                    <div className="scan-line"></div>
                  </div>

                  <div className="card-body">
                    <h3 className="card-name">{perfil.nombre}</h3>
                    <p className="card-role">{perfil.bio}</p>
                    
                    <div className="card-stats">
                      <div className="stat-item">
                        <span className="stat-value">3+</span>
                        <span className="stat-label">Años Exp.</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-value">20+</span>
                        <span className="stat-label">Proyectos</span>
                      </div>
                    </div>

                    <div className="card-tech-stack">
                      <span className="tech-pill">React</span>
                      <span className="tech-pill">Node</span>
                      <span className="tech-pill">JS</span>
                    </div>
                  </div>
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="floating-card card-code">
                  <code>&lt;Coder /&gt;</code>
                </div>
                <div className="floating-card card-ui">
                  <span>UI/UX</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
