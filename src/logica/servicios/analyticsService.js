// Servicio para manejo de analytics
export const registrarVistasPagina = (rutaPagina) => {
  console.log('Vista de página:', rutaPagina);
  // Integrar con Google Analytics, Plausible, etc.
};

export const registrarEvento = (categoria, accion, etiqueta = '', valor = 0) => {
  console.log('Evento:', { categoria, accion, etiqueta, valor });
  // Integrar con servicio de analytics
};

export const registrarClickBoton = (nombreBoton) => {
  registrarEvento('Interacción', 'Click', nombreBoton);
};

export const registrarDescargaCV = () => {
  registrarEvento('Descarga', 'CV', 'curriculum-vitae');
};

export const registrarEnlaceExterno = (url) => {
  registrarEvento('Enlace Externo', 'Click', url);
};
