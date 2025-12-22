# 002 - Requisitos del Sistema

## 💻 Requisitos de Software

### Node.js y npm
```bash
Node.js: >= 16.0.0 (Recomendado: 18.x o 20.x)
npm: >= 7.0.0 (o yarn >= 1.22.0)
```

**Verificar instalación:**
```bash
node --version
npm --version
```

### Editor de Código
- **Visual Studio Code** (Recomendado)
- WebStorm
- Sublime Text
- Atom

### Navegadores Soportados
- Chrome >= 90
- Firefox >= 88
- Safari >= 14
- Edge >= 90

## 📦 Dependencias del Proyecto

### Dependencias de Producción

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.11.0",
  "framer-motion": "^12.23.26",
  "web-vitals": "^2.1.4"
}
```

### Dependencias de Desarrollo

```json
{
  "react-scripts": "5.0.1",
  "autoprefixer": "^10.4.23",
  "postcss": "^8.5.6"
}
```

## 🌐 Requisitos de Red

### API de GitHub
- **URL**: `https://api.github.com`
- **Tipo**: Pública (sin autenticación requerida)
- **Límite**: 60 peticiones/hora sin autenticación
- **Límite autenticado**: 5000 peticiones/hora (opcional)

### Conexión a Internet
- Requerida para obtener datos de GitHub
- Requerida para instalar dependencias
- Opcional para desarrollo local (después de la instalación)

## 💾 Requisitos de Almacenamiento

### Espacio en Disco
- **Código fuente**: ~5 MB
- **node_modules**: ~350 MB
- **Build de producción**: ~2 MB
- **Total recomendado**: 500 MB disponibles

### Memoria RAM
- **Mínimo**: 4 GB
- **Recomendado**: 8 GB o más
- **Para desarrollo**: 2 GB libres durante ejecución

## 🔧 Herramientas Opcionales

### Git
```bash
Git >= 2.30.0
```

**Para clonar el repositorio:**
```bash
git --version
```

### Extensiones de VS Code Recomendadas
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Import
- Path Intellisense
- GitLens

## 🖥️ Requisitos del Sistema Operativo

### Windows
- Windows 10 o superior
- PowerShell 5.1 o superior
- CMD o Git Bash

### macOS
- macOS 10.15 (Catalina) o superior
- Terminal nativo o iTerm2

### Linux
- Ubuntu 18.04 LTS o superior
- Fedora 32 o superior
- Debian 10 o superior
- Cualquier distribución con Node.js compatible

## 🔐 Requisitos de Seguridad

### Permisos
- Lectura/escritura en directorio del proyecto
- Acceso a red (firewall)
- Permisos para instalar paquetes npm

### HTTPS
- Recomendado para producción
- Opcional para desarrollo local

## ✅ Checklist de Requisitos

Antes de instalar, asegúrate de tener:

- [ ] Node.js >= 16.0.0 instalado
- [ ] npm o yarn instalado
- [ ] Editor de código configurado
- [ ] Conexión a internet activa
- [ ] 500 MB de espacio disponible
- [ ] Git instalado (opcional)
- [ ] Cuenta de GitHub activa

## 📞 Soporte

Si no cumples con algún requisito:
- **Node.js**: Descarga de [nodejs.org](https://nodejs.org)
- **Git**: Descarga de [git-scm.com](https://git-scm.com)
- **VS Code**: Descarga de [code.visualstudio.com](https://code.visualstudio.com)

---

💡 **Nota**: Todos los requisitos son para la versión actual del proyecto (Diciembre 2025)
