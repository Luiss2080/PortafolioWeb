// NOTA: Este archivo ya no se usa directamente
// Los proyectos ahora se cargan dinámicamente desde GitHub API
// Ver: src/logica/servicios/githubService.js

// Datos de ejemplo de proyectos (solo como referencia)
// Para proyectos reales, se obtienen automáticamente de tu perfil de GitHub
export const proyectosEjemplo = [
  {
    id: 1,
    titulo: 'Sistema de Gestión',
    descripcion: 'Aplicación web para gestión empresarial completa',
    tecnologias: ['React', 'Node.js', 'MongoDB'],
    url: 'https://github.com/tuusuario/proyecto1',
    destacado: true
  },
  {
    id: 2,
    titulo: 'Plataforma E-commerce',
    descripcion: 'Tienda online con carrito de compras y pasarela de pago',
    tecnologias: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    url: 'https://github.com/tuusuario/proyecto2',
    destacado: true
  },
  {
    id: 3,
    titulo: 'App Mobile Fitness',
    descripcion: 'Aplicación móvil para seguimiento de ejercicios',
    tecnologias: ['React Native', 'Firebase', 'Redux'],
    url: 'https://github.com/tuusuario/proyecto3',
    destacado: false
  }
];

// Por compatibilidad, exportamos el array vacío
// Los datos reales vienen de GitHub
export const proyectos = [];
