// Hook para detección de tamaño de ventana
import { useState, useEffect } from 'react';

export const useTamañoVentana = () => {
  const [tamañoVentana, setTamañoVentana] = useState({
    ancho: window.innerWidth,
    alto: window.innerHeight
  });

  useEffect(() => {
    const manejarResize = () => {
      setTamañoVentana({
        ancho: window.innerWidth,
        alto: window.innerHeight
      });
    };

    window.addEventListener('resize', manejarResize);
    return () => window.removeEventListener('resize', manejarResize);
  }, []);

  const esMobile = tamañoVentana.ancho < 768;
  const esTablet = tamañoVentana.ancho >= 768 && tamañoVentana.ancho < 1024;
  const esDesktop = tamañoVentana.ancho >= 1024;

  return { ...tamañoVentana, esMobile, esTablet, esDesktop };
};
