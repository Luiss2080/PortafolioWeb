// Hook para intersección de elementos (lazy loading, animaciones)
import { useState, useEffect, useRef } from 'react';

export const useInterseccion = (opciones = {}) => {
  const [esVisible, setEsVisible] = useState(false);
  const elementoRef = useRef(null);

  useEffect(() => {
    const elemento = elementoRef.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(([entrada]) => {
      setEsVisible(entrada.isIntersecting);
    }, {
      threshold: 0.1,
      ...opciones
    });

    observador.observe(elemento);

    return () => {
      if (elemento) {
        observador.unobserve(elemento);
      }
    };
  }, [opciones]);

  return [elementoRef, esVisible];
};
