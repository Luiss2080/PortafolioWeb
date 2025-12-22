// Componente Header principal del portafolio
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { obtenerPerfil } from '../../logica/servicios/githubService';
import { useGitHub } from '../../logica/hooks';
import './estilos/Header.css';

const Header = ({ 
  titulo, 
  subtitulo, 
  children, 
  mostrarParticulas = true,
  mostrarPerfil = false,
  mostrarStats = false,
  mostrarBotones = false 
}) => {
  const [particulas, setParticulas] = useState([]);
  const [typedText, setTypedText] = useState('');
  const { datos: perfil } = useGitHub(obtenerPerfil);

  // Efecto de escritura automática
  useEffect(() => {
    if (subtitulo && typeof subtitulo === 'string') {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(subtitulo.slice(0, index));
        index++;
        if (index > subtitulo.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [subtitulo]);

  useEffect(() => {
    if (mostrarParticulas) {
      // Generar partículas aleatorias
      const nuevasParticulas = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4
      }));
      setParticulas(nuevasParticulas);
    }
  }, [mostrarParticulas]);

  return (
    <header className="header-layout">
      {/* Fondo animado con ondas */}
      <div className="header-ondas">
        <div className="header-onda header-onda-1"></div>
        <div className="header-onda header-onda-2"></div>
        <div className="header-onda header-onda-3"></div>
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
                height: `${particula.size}px`
              }}
            />
          ))}
        </div>
      )}

      {/* Grid de fondo */}
      <div className="header-grid"></div>

      {/* Contenido principal */}
      <div className="header-contenido">
        {/* Card de Perfil Profesional */}
        {mostrarPerfil && perfil && (
          <div className="perfil-card">
            <div className="perfil-decoracion perfil-decoracion-1"></div>
            <div className="perfil-decoracion perfil-decoracion-2"></div>
            
            <div className="perfil-avatar-container">
              <div className="perfil-avatar-marco">
                <img 
                  src={perfil.avatar} 
                  alt={perfil.nombre}
                  className="perfil-avatar"
                />
                <div className="perfil-avatar-borde"></div>
              </div>
              <div className="perfil-status">
                <span className="status-punto"></span>
                <span className="status-texto">Disponible</span>
              </div>
            </div>

            <div className="perfil-info">
              <h2 className="perfil-nombre">{perfil.nombre}</h2>
              <p className="perfil-bio">{perfil.bio}</p>
              
              {/* Tech Badges */}
              <div className="perfil-badges">
                <span className="tech-badge">🚀 Full Stack</span>
                <span className="tech-badge">⚡ React Expert</span>
                <span className="tech-badge">🔥 Open Source</span>
              </div>

              {/* Quick Stats */}
              {mostrarStats && (
                <div className="perfil-quick-stats">
                  <div className="quick-stat">
                    <span className="stat-numero">{perfil.repositorios}</span>
                    <span className="stat-label">Repos</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-numero">{perfil.seguidores}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                  <div className="quick-stat">
                    <span className="stat-numero">{perfil.siguiendo}</span>
                    <span className="stat-label">Following</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Título con animación de letras */}
        {titulo && (
          <div className="header-titulo-contenedor">
            <div className="titulo-decoracion"></div>
            <h1 className="header-titulo">
              {titulo.split('').map((letra, index) => (
                <span 
                  key={index} 
                  className="header-letra"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letra === ' ' ? '\u00A0' : letra}
                </span>
              ))}
            </h1>
            <div className="header-titulo-linea"></div>
            <div className="titulo-codigo">
              <span className="codigo-texto">{'<developer>'}</span>
            </div>
          </div>
        )}
        
        {/* Subtítulo con efecto de escritura */}
        {subtitulo && (
          <div className="header-subtitulo-wrapper">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-1"></span>
                <span className="terminal-dot terminal-dot-2"></span>
                <span className="terminal-dot terminal-dot-3"></span>
              </div>
              <p className="header-subtitulo">
                <span className="terminal-prompt">{'>'}</span>
                <span className="header-subtitulo-texto">{typedText}</span>
                <span className="cursor-blink">|</span>
              </p>
            </div>
          </div>
        )}

        {/* Botones de Acción */}
        {mostrarBotones && (
          <div className="header-acciones">
            <Link to="/proyectos" className="btn-header btn-primary">
              <span className="btn-icono">💼</span>
              <span className="btn-texto">Ver Proyectos</span>
              <span className="btn-brillo"></span>
            </Link>
            <Link to="/contacto" className="btn-header btn-secondary">
              <span className="btn-icono">📧</span>
              <span className="btn-texto">Contactar</span>
              <span className="btn-brillo"></span>
            </Link>
            <a 
              href="https://github.com/Luiss2080" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-header btn-outline"
            >
              <span className="btn-icono">⚡</span>
              <span className="btn-texto">GitHub</span>
              <span className="btn-brillo"></span>
            </a>
          </div>
        )}
        
        {children && (
          <div className="header-contenido-extra">
            {children}
          </div>
        )}

        {/* Indicador de scroll mejorado */}
        <div className="header-scroll-indicador">
          <div className="scroll-mouse">
            <div className="scroll-rueda"></div>
          </div>
          <span className="scroll-texto">Scroll Down</span>
          <div className="scroll-flecha">↓</div>
        </div>
      </div>

      {/* Efecto de brillo */}
      <div className="header-brillo"></div>
    </header>
  );
};

export default Header;
