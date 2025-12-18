// Componente de barra de navegación principal
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RUTAS_ARRAY } from '../../configuracion/rutas';
import { useAnimacionScroll } from '../../logica/hooks/useAnimacionScroll';
import './BarraNavegacion.css';

const BarraNavegacion = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { scrollY } = useAnimacionScroll();

  const alternarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <motion.nav
      className={`barra-navegacion ${scrollY > 50 ? 'con-sombra' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contenedor-navegacion">
        <Link to="/" className="logo">
          <span className="logo-texto">Luiss.dev</span>
        </Link>

        <button 
          className="boton-menu-mobile"
          onClick={alternarMenu}
          aria-label="Toggle menu"
        >
          <span className={`icono-hamburguesa ${menuAbierto ? 'abierto' : ''}`}></span>
        </button>

        <div className={`menu-navegacion ${menuAbierto ? 'menu-abierto' : ''}`}>
          {RUTAS_ARRAY.map((ruta, index) => (
            <Link
              key={ruta.path}
              to={ruta.path}
              className="enlace-navegacion"
              onClick={() => setMenuAbierto(false)}
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {ruta.nombre}
              </motion.span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default BarraNavegacion;
