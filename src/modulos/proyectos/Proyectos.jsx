// Vista de Proyectos - Conectada a GitHub
import React, { useState } from 'react';
import ContenedorAnimado from '../../componentes/animaciones/ContenedorAnimado.jsx';
import TarjetaProyecto from '../../componentes/tarjetas/TarjetaProyecto.jsx';
import Cargador from '../../componentes/animaciones/Cargador.jsx';
import { obtenerRepositorios } from '../../logica/servicios/githubService';
import { useGitHub } from '../../logica/hooks';
import './Proyectos.css';

const Proyectos = () => {
  const { datos: repositorios, cargando, error } = useGitHub(
    () => obtenerRepositorios({ ordenar: 'updated', direccion: 'desc' })
  );

  const [filtro, setFiltro] = useState('todos');
  const [busqueda, setBusqueda] = useState('');

  // Filtrar repositorios
  const proyectosFiltrados = repositorios?.filter(repo => {
    // Filtrar por búsqueda
    const cumpleBusqueda = repo.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                           repo.descripcion?.toLowerCase().includes(busqueda.toLowerCase());
    
    // Filtrar por tipo
    if (filtro === 'destacados') {
      return cumpleBusqueda && repo.estrellas > 0;
    } else if (filtro === 'recientes') {
      const unMesAtras = new Date();
      unMesAtras.setMonth(unMesAtras.getMonth() - 1);
      return cumpleBusqueda && new Date(repo.fechaActualizacion) > unMesAtras;
    }
    
    return cumpleBusqueda && !repo.esFork;
  }) || [];

  // Obtener lenguajes únicos para filtrar
  const lenguajes = [...new Set(repositorios?.map(r => r.lenguaje).filter(Boolean))];

  if (cargando) {
    return (
      <div className="vista-proyectos vista-cargando">
        <Cargador texto="Cargando proyectos desde GitHub..." />
      </div>
    );
  }

  if (error) {
    return (
      <ContenedorAnimado className="vista-proyectos vista-error">
        <div className="contenedor-error">
          <h2>Error al cargar proyectos</h2>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="boton-reintentar">
            Reintentar
          </button>
        </div>
      </ContenedorAnimado>
    );
  }

  return (
    <ContenedorAnimado className="vista-proyectos" animacion="slideUp">
      <div className="contenedor-proyectos">
        {/* Header */}
        <header className="header-seccion">
          <div className="titulo-wrapper">
            <h1 className="titulo-seccion">
              <span className="icono-proyectos">📁</span>
              Mis Proyectos
            </h1>
            <div className="contador-proyectos">
              <span className="numero">{proyectosFiltrados.length}</span>
              <span className="texto">repositorios</span>
            </div>
          </div>
          <p className="descripcion-seccion">
            Proyectos sincronizados automáticamente desde mi perfil de GitHub
          </p>
        </header>

        {/* Controles de filtrado */}
        <div className="controles-proyectos">
          <div className="barra-busqueda">
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path d="M10.68 11.74a6 6 0 01-7.922-8.982 6 6 0 018.982 7.922l3.04 3.04a.749.749 0 01-.326 1.275.749.749 0 01-.734-.215l-3.04-3.04zm-4.68-2.99a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" fill="currentColor"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="input-busqueda"
            />
          </div>

          <div className="filtros">
            <button
              className={`filtro-btn ${filtro === 'todos' ? 'activo' : ''}`}
              onClick={() => setFiltro('todos')}
            >
              Todos
            </button>
            <button
              className={`filtro-btn ${filtro === 'destacados' ? 'activo' : ''}`}
              onClick={() => setFiltro('destacados')}
            >
              ⭐ Destacados
            </button>
            <button
              className={`filtro-btn ${filtro === 'recientes' ? 'activo' : ''}`}
              onClick={() => setFiltro('recientes')}
            >
              🕒 Recientes
            </button>
          </div>
        </div>

        {/* Grid de proyectos */}
        {proyectosFiltrados.length > 0 ? (
          <div className="grid-proyectos">
            {proyectosFiltrados.map(proyecto => (
              <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
            ))}
          </div>
        ) : (
          <div className="sin-resultados">
            <p>No se encontraron proyectos que coincidan con tu búsqueda</p>
          </div>
        )}

        {/* Footer con estadísticas */}
        <footer className="footer-proyectos">
          <div className="estadistica">
            <span className="valor">{repositorios?.length || 0}</span>
            <span className="label">Total Repositorios</span>
          </div>
          <div className="estadistica">
            <span className="valor">
              {repositorios?.reduce((sum, r) => sum + r.estrellas, 0) || 0}
            </span>
            <span className="label">Total Estrellas</span>
          </div>
          <div className="estadistica">
            <span className="valor">{lenguajes.length}</span>
            <span className="label">Lenguajes</span>
          </div>
        </footer>
      </div>
    </ContenedorAnimado>
  );
};

export default Proyectos;
