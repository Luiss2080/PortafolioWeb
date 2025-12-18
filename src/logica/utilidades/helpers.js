// Utilidades de ayuda generales
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = (func, limit = 100) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const copiarAlPortapapeles = async (texto) => {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (error) {
    console.error('Error al copiar:', error);
    return false;
  }
};

export const descargarArchivo = (contenido, nombreArchivo, tipo = 'text/plain') => {
  const blob = new Blob([contenido], { type: tipo });
  const url = URL.createObjectURL(blob);
  const enlace = document.createElement('a');
  enlace.href = url;
  enlace.download = nombreArchivo;
  enlace.click();
  URL.revokeObjectURL(url);
};

export const esperarTiempo = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const generarId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
