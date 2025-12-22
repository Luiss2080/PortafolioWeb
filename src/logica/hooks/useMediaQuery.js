// Hook personalizado para Media Query
import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [coincide, setCoincide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Establecer valor inicial
    setCoincide(mediaQuery.matches);

    // Crear listener para cambios
    const handler = (event) => setCoincide(event.matches);
    
    // Agregar listener
    mediaQuery.addEventListener('change', handler);

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return coincide;
};

// Hooks predefinidos comunes
export const useEsMovil = () => useMediaQuery('(max-width: 768px)');
export const useEsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
export const useEsEscritorio = () => useMediaQuery('(min-width: 1025px)');
export const usePrefiereOscuro = () => useMediaQuery('(prefers-color-scheme: dark)');

export default useMediaQuery;
