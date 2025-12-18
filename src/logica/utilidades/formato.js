// Utilidades de formato
export const formatearFecha = (fecha, opciones = {}) => {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...opciones
  });
};

export const formatearNumero = (numero) => {
  return new Intl.NumberFormat('es-ES').format(numero);
};

export const capitalizar = (texto) => {
  if (!texto) return '';
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
};

export const truncarTexto = (texto, longitud = 100) => {
  if (!texto || texto.length <= longitud) return texto;
  return texto.substring(0, longitud) + '...';
};

export const limpiarTexto = (texto) => {
  return texto.trim().replace(/\s+/g, ' ');
};

export const generarSlug = (texto) => {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};
