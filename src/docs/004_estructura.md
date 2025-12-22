# 004 - Estructura del Proyecto

## 📂 Estructura de Carpetas

```
PortafolioWeb/
├── public/                 # Archivos públicos estáticos
│   ├── index.html         # HTML principal
│   ├── manifest.json      # PWA manifest
│   └── robots.txt         # SEO robots
│
├── src/                   # Código fuente principal
│   ├── componentes/       # Componentes reutilizables
│   │   ├── animaciones/   # Componentes de animación
│   │   │   ├── Cargador.js
│   │   │   ├── Cargador.css
│   │   │   ├── ContenedorAnimado.js
│   │   │   └── index.js
│   │   │
│   │   ├── formularios/   # Componentes de formularios
│   │   │   ├── FormularioContacto.js
│   │   │   ├── FormularioContacto.css
│   │   │   └── index.js
│   │   │
│   │   ├── navegacion/    # Navegación y layout
│   │   │   ├── BarraNavegacion.js
│   │   │   ├── BarraNavegacion.css
│   │   │   ├── PiePagina.js
│   │   │   ├── PiePagina.css
│   │   │   └── index.js
│   │   │
│   │   └── tarjetas/      # Componentes de tarjetas
│   │       ├── TarjetaProyecto.js
│   │       ├── TarjetaProyecto.css
│   │       ├── TarjetaHabilidad.js
│   │       ├── TarjetaHabilidad.css
│   │       ├── TarjetaExperiencia.js
│   │       ├── TarjetaExperiencia.css
│   │       └── index.js
│   │
│   ├── vistas/            # Páginas/Vistas principales
│   │   ├── Inicio.js
│   │   ├── Inicio.css
│   │   ├── Proyectos.js
│   │   ├── Proyectos.css
│   │   ├── SobreMi.js
│   │   ├── SobreMi.css
│   │   ├── Habilidades.js
│   │   ├── Habilidades.css
│   │   ├── Experiencia.js
│   │   ├── Experiencia.css
│   │   ├── Contacto.js
│   │   └── Contacto.css
│   │
│   ├── logica/            # Lógica de negocio
│   │   ├── hooks/         # Custom React Hooks
│   │   │   ├── useGitHub.js
│   │   │   ├── useAnimacionScroll.js
│   │   │   ├── useTamañoVentana.js
│   │   │   ├── useFormulario.js
│   │   │   ├── useTemaOscuro.js
│   │   │   ├── useInterseccion.js
│   │   │   └── index.js
│   │   │
│   │   ├── servicios/     # Servicios externos (APIs)
│   │   │   ├── githubService.js
│   │   │   ├── emailService.js
│   │   │   ├── analyticsService.js
│   │   │   ├── apiService.js
│   │   │   └── index.js
│   │   │
│   │   └── utilidades/    # Funciones utilitarias
│   │       ├── formato.js
│   │       ├── helpers.js
│   │       ├── validaciones.js
│   │       ├── storage.js
│   │       └── index.js
│   │
│   ├── datos/             # Datos estáticos y configuración
│   │   ├── perfil.js
│   │   ├── proyectos.js
│   │   ├── habilidades.js
│   │   └── experiencia.js
│   │
│   ├── configuracion/     # Configuraciones globales
│   │   ├── rutas.js
│   │   ├── constantes.js
│   │   └── animaciones.js
│   │
│   ├── docs/              # Documentación del proyecto
│   │   ├── 001_introduccion.md
│   │   ├── 002_requisitos.md
│   │   ├── 003_instalacion.md
│   │   ├── 004_estructura.md
│   │   └── ... (más docs)
│   │
│   ├── assets/            # Recursos estáticos (imágenes, fonts)
│   │
│   ├── App.js             # Componente raíz
│   ├── App.css            # Estilos globales de App
│   ├── index.js           # Punto de entrada
│   ├── index.css          # Estilos globales
│   └── reportWebVitals.js # Métricas de rendimiento
│
├── package.json           # Dependencias y scripts
├── postcss.config.js      # Configuración PostCSS
├── .gitignore            # Archivos ignorados por Git
└── README.md             # Documentación principal
```

## 📦 Descripción de Carpetas

### `/public`
Archivos estáticos que se copian directamente al build. No son procesados por Webpack.

**Usos:**
- HTML base
- Íconos y manifiestos PWA
- Archivos SEO (robots.txt, sitemap.xml)

### `/src/componentes`
Componentes React reutilizables organizados por funcionalidad.

**Subcarpetas:**
- `animaciones/`: Componentes con animaciones (Cargador, ContenedorAnimado)
- `formularios/`: Formularios y campos (FormularioContacto)
- `navegacion/`: Header, footer, menús (BarraNavegacion, PiePagina)
- `tarjetas/`: Cards de visualización (Proyecto, Habilidad, Experiencia)

### `/src/vistas`
Páginas completas de la aplicación. Cada vista tiene su JS y CSS correspondiente.

**Vistas disponibles:**
- `Inicio`: Página principal con estadísticas
- `Proyectos`: Listado de repositorios de GitHub
- `SobreMi`: Información personal
- `Habilidades`: Skills técnicos
- `Experiencia`: Historial laboral
- `Contacto`: Formulario de contacto

### `/src/logica`
Lógica de negocio separada de la UI.

**Subcarpetas:**
- `hooks/`: Custom hooks de React
- `servicios/`: Comunicación con APIs externas
- `utilidades/`: Funciones auxiliares puras

### `/src/datos`
Datos estáticos y configuraciones de contenido.

**Archivos:**
- `perfil.js`: Info personal y redes sociales
- `proyectos.js`: Proyectos destacados (fallback)
- `habilidades.js`: Tecnologías y competencias
- `experiencia.js`: Historial profesional

### `/src/configuracion`
Configuraciones globales del proyecto.

**Archivos:**
- `rutas.js`: Rutas de navegación
- `constantes.js`: Constantes globales
- `animaciones.js`: Configuraciones de animaciones

### `/src/docs`
Documentación técnica del proyecto.

**Archivos numerados:**
- `001_`: Introducción
- `002_`: Requisitos
- `003_`: Instalación
- `004_`: Estructura (este archivo)
- ... más documentación

## 🏗️ Convenciones de Nombres

### Archivos de Componentes
```
NombreComponente.js    # Componente React
NombreComponente.css   # Estilos del componente
index.js               # Exportaciones del módulo
```

### Archivos de Configuración
```javascript
nombreArchivo.js       # camelCase para archivos JS
nombre-archivo.css     # kebab-case para CSS
```

### Carpetas
```
nombreCarpeta/         # camelCase
├── SubCarpeta/        # PascalCase para componentes
└── archivo.js
```

## 📋 Principios de Organización

### 1. Separación de Responsabilidades
- UI en `componentes/` y `vistas/`
- Lógica en `logica/`
- Datos en `datos/`
- Config en `configuracion/`

### 2. Modularidad
- Cada componente en su propia carpeta
- CSS junto al componente que lo usa
- Exportaciones centralizadas en `index.js`

### 3. Escalabilidad
- Fácil agregar nuevos componentes
- Estructura clara para nuevos desarrolladores
- Separación clara de funcionalidades

### 4. Mantenibilidad
- Archivos pequeños y enfocados
- Nombres descriptivos
- Documentación inline

## 🔗 Relaciones entre Carpetas

```
App.js
  ├── usa → vistas/
  │   └── usan → componentes/
  │       ├── usan → logica/hooks/
  │       └── usan → logica/servicios/
  │
  ├── usa → configuracion/
  │   └── usa → constantes
  │
  └── importa → datos/
      └── contiene datos estáticos
```

---

📚 **Próximo documento**: `005_componentes.md` - Guía de componentes
