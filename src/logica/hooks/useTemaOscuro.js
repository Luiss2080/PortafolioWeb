// Hook para modo oscuro/claro
import { useState, useEffect } from 'react';

export const useTemaOscuro = () => {
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const temaGuardado = localStorage.getItem('tema');
    return temaGuardado ? temaGuardado === 'oscuro' : true;
  });

  useEffect(() => {
    localStorage.setItem('tema', temaOscuro ? 'oscuro' : 'claro');
    if (temaOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [temaOscuro]);

  const alternarTema = () => setTemaOscuro(!temaOscuro);

  return { temaOscuro, alternarTema };
};
