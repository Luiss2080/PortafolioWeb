// Hook personalizado para animaciones de scroll
import { useState, useEffect } from 'react';

export const useAnimacionScroll = (umbral = 100) => {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      const posicionActual = window.scrollY;
      setScrollY(posicionActual);
      setVisible(posicionActual > umbral);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, [umbral]);

  return { scrollY, visible };
};
