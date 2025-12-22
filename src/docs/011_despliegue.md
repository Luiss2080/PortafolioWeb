# 011 - Guía de Despliegue

## 🚀 Build de Producción

### Generar Build

```bash
npm run build
```

Esto crea una carpeta `build/` optimizada con:
- JavaScript minificado
- CSS optimizado
- Imágenes comprimidas
- HTML con hashes para caché

## 🌐 Vercel (Recomendado)

### Despliegue Automático

1. Instalar Vercel CLI:
```bash
npm install -g vercel
```

2. Desplegar:
```bash
vercel
```

3. Seguir las instrucciones en pantalla

### Despliegue desde GitHub

1. Ir a [vercel.com](https://vercel.com)
2. "New Project"
3. Importar repositorio de GitHub
4. Configurar:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`

## 🔷 Netlify

### Drag & Drop

1. Ejecutar `npm run build`
2. Ir a [netlify.com](https://netlify.com)
3. Arrastrar carpeta `build/` a Netlify

### Deploy desde Git

1. Conectar repositorio
2. Configurar:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy

## 📄 GitHub Pages

### Configuración

1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agregar en `package.json`:
```json
{
  "homepage": "https://Luiss2080.github.io/PortafolioWeb",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Desplegar:
```bash
npm run deploy
```

## 🐳 Docker (Avanzado)

### Dockerfile

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Construir y Ejecutar

```bash
docker build -t portafolio-web .
docker run -p 80:80 portafolio-web
```

## ✅ Verificación Post-Despliegue

- [ ] Cargan todas las páginas
- [ ] Funcionan los links de navegación
- [ ] Se obtienen datos de GitHub
- [ ] Imágenes cargadas correctamente
- [ ] Responsive en móviles
- [ ] No hay errores en consola
