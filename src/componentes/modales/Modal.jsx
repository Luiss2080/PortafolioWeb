// Componente Modal reutilizable
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './estilos/Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  titulo = '', 
  tamaño = 'medium',
  cerrarAlClickFuera = true 
}) => {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (cerrarAlClickFuera && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          onClick={handleBackdropClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`modal-contenedor modal-${tamaño}`}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, type: 'spring' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              {titulo && <h2 className="modal-titulo">{titulo}</h2>}
              <button 
                className="modal-boton-cerrar" 
                onClick={onClose}
                aria-label="Cerrar modal"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="modal-contenido">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
