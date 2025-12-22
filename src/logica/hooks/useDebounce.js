// Hook personalizado para Debounce
import { useState, useEffect } from 'react';

export const useDebounce = (valor, delay = 500) => {
  const [valorDebounced, setValorDebounced] = useState(valor);

  useEffect(() => {
    // Crear timeout para actualizar el valor después del delay
    const handler = setTimeout(() => {
      setValorDebounced(valor);
    }, delay);

    // Limpiar timeout si el valor cambia antes del delay
    return () => {
      clearTimeout(handler);
    };
  }, [valor, delay]);

  return valorDebounced;
};

export default useDebounce;
