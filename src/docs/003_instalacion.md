# 003 - Guía de Instalación

## 📦 Proceso de Instalación

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/Luiss2080/PortafolioWeb.git
cd PortafolioWeb
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

o con yarn:

```bash
yarn install
```

### Paso 3: Configuración (Opcional)

Edita `src/logica/servicios/githubService.js` para cambiar el usuario:

```javascript
const GITHUB_USERNAME = 'TU_USUARIO_AQUI';
```

### Paso 4: Iniciar Servidor de Desarrollo

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

## ⚠️ Solución de Problemas Comunes

### Error: "Port 3000 already in use"

```bash
# Windows
taskkill /F /IM node.exe

# Linux/Mac
killall node
```

### Error: "Module not found"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de caché

```bash
npm start -- --reset-cache
```

## ✅ Verificación de Instalación

Después de ejecutar `npm start`, deberías ver:

```
Compiled successfully!

You can now view luiss-dev in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```
