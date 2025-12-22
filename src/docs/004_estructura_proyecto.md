# 004 - Estructura del Proyecto

## 📁 Árbol de Directorios

```
PortafolioWeb/
├── public/                 # Archivos estáticos
│   ├── index.html         # HTML principal
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO
│
├── src/                   # Código fuente
│   ├── componentes/       # Componentes reutilizables
│   │   ├── animaciones/  # Cargadores, wrappers animados
│   │   ├── formularios/  # Formularios de contacto
│   │   ├── navegacion/   # Navbar, Footer
│   │   └── tarjetas/     # Cards de proyectos, habilidades
│   │
│   ├── vistas/           # Páginas principales
│   │   ├── Inicio.js     # Home con estadísticas
│   │   ├── Proyectos.js  # Lista de proyectos
│   │   ├── SobreMi.js    # Información personal
│   │   ├── Habilidades.js
│   │   ├── Experiencia.js
│   │   └── Contacto.js
│   │
│   ├── logica/           # Lógica de negocio
│   │   ├── hooks/        # Custom hooks
│   │   ├── servicios/    # API services
│   │   └── utilidades/   # Helpers, validaciones
│   │
│   ├── datos/            # Datos estáticos
│   ├── configuracion/    # Constantes, rutas
│   ├── docs/             # Documentación
│   │
│   ├── App.js            # Componente principal
│   ├── App.css           # Estilos globales
│   ├── index.js          # Entry point
│   └── index.css         # CSS base
│
├── package.json          # Dependencias
├── postcss.config.js     # Configuración PostCSS
└── README.md             # Documentación principal
```

## 📄 Archivos Clave

### `/src/App.js`
- Componente raíz de la aplicación
- Configuración de React Router
- Layout principal

### `/src/logica/servicios/githubService.js`
- Integración con GitHub API
- Funciones para obtener datos

### `/src/logica/hooks/useGitHub.js`
- Hook personalizado para cargar datos
- Manejo de estados (loading, error, data)

## 🎯 Convenciones de Nombres

- **Componentes**: PascalCase (ej: `TarjetaProyecto.js`)
- **Hooks**: camelCase con prefijo 'use' (ej: `useGitHub.js`)
- **Servicios**: camelCase con sufijo 'Service' (ej: `githubService.js`)
- **CSS**: Mismo nombre que el componente (ej: `TarjetaProyecto.css`)
