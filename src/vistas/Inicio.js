// Vista de Inicio/Home
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContenedorAnimado from '../componentes/animaciones/ContenedorAnimado';
import { informacionPersonal } from '../datos/perfil';
import './Inicio.css';

const Inicio = () => {
  return (
    <ContenedorAnimado className="vista-inicio" animacion="fadeIn">
      <div className="contenido-inicio">
        <motion.div
          className="texto-hero"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="titulo-hero">
            Hola, soy <span className="nombre-destacado">{informacionPersonal.nombre}</span>
          </h1>
          <h2 className="subtitulo-hero">{informacionPersonal.titulo}</h2>
          <p className="descripcion-hero">{informacionPersonal.descripcion}</p>

          <div className="botones-hero">
            <Link to="/proyectos" className="boton-primario">
              Ver Proyectos
            </Link>
            <Link to="/contacto" className="boton-secundario">
              Contactar
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="imagen-hero"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="circulo-decorativo"></div>
          <div className="cuadro-decorativo"></div>
        </motion.div>
      </div>
    </ContenedorAnimado>
  );
};

export default Inicio;
