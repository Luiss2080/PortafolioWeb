// Hook personalizado para LocalStorage
import { useState, useEffect } from 'react';

export const useLocalStorage = (clave, valorInicial) => {
  // Inicializar estado con valor del localStorage o valor inicial
  const [valorAlmacenado, setValorAlmacenado] = useState(() => {
    try {
      const item = window.localStorage.getItem(clave);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error(`Error al leer ${clave} del localStorage:`, error);
      return valorInicial;
    }
  });

  // Guardar en localStorage cuando cambie el valor
  const setValor = (valor) => {
    try {
      const valorAGuardar = valor instanceof Function ? valor(valorAlmacenado) : valor;
      setValorAlmacenado(valorAGuardar);
      window.localStorage.setItem(clave, JSON.stringify(valorAGuardar));
    } catch (error) {
      console.error(`Error al guardar ${clave} en localStorage:`, error);
    }
  };

  // Eliminar del localStorage
  const eliminarValor = () => {
    try {
      window.localStorage.removeItem(clave);
      setValorAlmacenado(valorInicial);
    } catch (error) {
      console.error(`Error al eliminar ${clave} del localStorage:`, error);
    }
  };

  return [valorAlmacenado, setValor, eliminarValor];
};

export default useLocalStorage;
