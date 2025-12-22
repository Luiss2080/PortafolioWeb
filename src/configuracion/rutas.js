// Configuración de rutas de la aplicación
export const RUTAS = {
  INICIO: '/',
  SOBRE_MI: '/sobre-mi',
  PROYECTOS: '/proyectos',
  PROYECTO_DETALLE: '/proyectos/:nombreRepo',
  HABILIDADES: '/habilidades',
  EXPERIENCIA: '/experiencia',
  CONTACTO: '/contacto'
};

export const RUTAS_ARRAY = [
  { path: RUTAS.INICIO, nombre: 'Inicio' },
  { path: RUTAS.SOBRE_MI, nombre: 'Sobre Mí' },
  { path: RUTAS.PROYECTOS, nombre: 'Proyectos' },
  { path: RUTAS.HABILIDADES, nombre: 'Habilidades' },
  { path: RUTAS.EXPERIENCIA, nombre: 'Experiencia' },
  { path: RUTAS.CONTACTO, nombre: 'Contacto' }
];
