// Hook personalizado para cargar datos de GitHub
import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para cargar datos de GitHub con manejo de estados
 * @param {Function} fetchFunction - Función asíncrona para obtener datos
 * @param {Array} dependencies - Dependencias para re-ejecutar el efecto
 * @returns {Object} Estado de carga, datos y error
 */
export const useGitHub = (fetchFunction, dependencies = []) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Memorizar función de recarga
  const recargar = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);
      const resultado = await fetchFunction();
      setDatos(resultado);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }, [fetchFunction]);

  useEffect(() => {
    let montado = true;
    
    const cargarDatos = async () => {
      try {
        setCargando(true);
        setError(null);
        
        const resultado = await fetchFunction();
        
        if (montado) {
          setDatos(resultado);
        }
      } catch (err) {
        if (montado) {
          setError(err.message);
          console.error('Error en useGitHub:', err);
        }
      } finally {
        if (montado) {
          setCargando(false);
        }
      }
    };

    cargarDatos();

    return () => {
      montado = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { datos, cargando, error, recargar };
};

export default useGitHub;
