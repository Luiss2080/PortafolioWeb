# 002 - Requerimientos del Sistema

## 💻 Requerimientos de Software

### Obligatorios

- **Node.js**: Versión 16.x o superior
- **npm**: Versión 7.x o superior (o yarn 1.22.x+)
- **Git**: Para control de versiones
- **Navegador Moderno**: Chrome, Firefox, Safari o Edge (últimas 2 versiones)

### Opcionales

- **VS Code**: Editor recomendado
- **React Developer Tools**: Extensión para debugging
- **Git Bash / Terminal**: Para ejecutar comandos

## 🔧 Dependencias Principales

### Producción

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.11.0",
  "framer-motion": "^12.23.26"
}
```

### Desarrollo

```json
{
  "react-scripts": "5.0.1",
  "autoprefixer": "^10.4.23",
  "postcss": "^8.5.6"
}
```

## 🌐 Requisitos de Red

- **Conexión a Internet**: Necesaria para obtener datos de GitHub API
- **GitHub API**: Sin autenticación (límite de 60 requests/hora)
- **Puertos**: 3000 (desarrollo) o el especificado

## 💾 Espacio en Disco

- **Instalación**: ~300 MB (con node_modules)
- **Build**: ~2 MB (optimizado para producción)

## 🔐 Permisos

- **Lectura de archivos**: Para el servidor de desarrollo
- **Acceso a red**: Para llamadas a GitHub API
- **Puerto HTTP**: Para servidor local
