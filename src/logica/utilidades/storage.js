// Utilidades para manejo de almacenamiento local
export const guardarEnStorage = (clave, valor) => {
  try {
    const valorSerializado = JSON.stringify(valor);
    localStorage.setItem(clave, valorSerializado);
    return true;
  } catch (error) {
    console.error('Error al guardar en storage:', error);
    return false;
  }
};

export const obtenerDeStorage = (clave, valorPorDefecto = null) => {
  try {
    const item = localStorage.getItem(clave);
    return item ? JSON.parse(item) : valorPorDefecto;
  } catch (error) {
    console.error('Error al obtener de storage:', error);
    return valorPorDefecto;
  }
};

export const eliminarDeStorage = (clave) => {
  try {
    localStorage.removeItem(clave);
    return true;
  } catch (error) {
    console.error('Error al eliminar de storage:', error);
    return false;
  }
};

export const limpiarStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error al limpiar storage:', error);
    return false;
  }
};
