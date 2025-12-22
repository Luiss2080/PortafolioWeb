# 005 - Configuración del Proyecto

## ⚙️ Archivos de Configuración

### package.json

Define las dependencias y scripts del proyecto:

```json
{
  "name": "luiss-dev",
  "version": "0.1.0",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### postcss.config.js

Configuración de PostCSS para procesamiento de CSS:

```javascript
export default {
  plugins: {
    autoprefixer: {},
  },
}
```

## 🎨 Configuración de Estilos

### Variables CSS (`src/index.css`)

```css
:root {
  --color-fondo: #000000;
  --color-acento: #ff0000;
  --color-texto-principal: #ffffff;
  --color-texto-secundario: #b0b0b0;
}
```

## 🔗 Configuración de Rutas

**Archivo**: `src/configuracion/rutas.js`

```javascript
export const RUTAS = {
  INICIO: '/',
  SOBRE_MI: '/sobre-mi',
  PROYECTOS: '/proyectos',
  HABILIDADES: '/habilidades',
  EXPERIENCIA: '/experiencia',
  CONTACTO: '/contacto'
};
```

## 🌐 Configuración de API

**Archivo**: `src/logica/servicios/githubService.js`

```javascript
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'Luiss2080'; // ← Cambiar aquí
```

## 🚀 Variables de Entorno (Opcional)

Crear archivo `.env` en la raíz:

```env
REACT_APP_GITHUB_USERNAME=Luiss2080
REACT_APP_API_URL=https://api.github.com
PORT=3000
```

## 🔧 Scripts Disponibles

```bash
npm start    # Desarrollo
npm build    # Producción
npm test     # Tests
npm eject    # Exponer configuración (irreversible)
```
