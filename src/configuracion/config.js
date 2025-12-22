// Constantes de configuración de la aplicación

// Información del desarrollador
export const DEVELOPER_INFO = {
  GITHUB_USERNAME: 'Luiss2080',
  NOMBRE: 'Luis',
  EMAIL: 'contacto@luiss.dev',
};

// URLs y enlaces
export const URLS = {
  GITHUB: `https://github.com/${DEVELOPER_INFO.GITHUB_USERNAME}`,
  LINKEDIN: 'https://linkedin.com/in/tuusuario',
  TWITTER: 'https://twitter.com/tuusuario',
  PORTFOLIO: 'https://luiss.dev',
};

// Configuración de la aplicación
export const APP_CONFIG = {
  TITULO: 'Luis - Desarrollador Web',
  DESCRIPCION: 'Portfolio personal de desarrollo web',
  VERSION: '2.0.0',
  AUTOR: DEVELOPER_INFO.NOMBRE,
};

// Temas y colores
export const THEME = {
  PRIMARY_COLOR: '#ff0000',
  SECONDARY_COLOR: '#000000',
  BACKGROUND: '#000000',
  TEXT_PRIMARY: '#ffffff',
  TEXT_SECONDARY: '#cccccc',
  BORDER: '#333333',
};

// Configuración de animaciones
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
};

// Breakpoints responsive
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
};

// Configuración de API
export const API_CONFIG = {
  GITHUB_API_URL: 'https://api.github.com',
  REQUEST_TIMEOUT: 10000,
  CACHE_TIME: 300000, // 5 minutos
};
