# 013 - Solución de Problemas

## 🐛 Problemas Comunes

### Error: "Cannot find module"

**Causa**: Dependencia faltante o import incorrecto

**Solución**:
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# Verificar imports
// Correcto
import { Component } from './Component';

// Incorrecto
import { Component } from './Component.js';
```

### Error: "Port 3000 in use"

**Causa**: Otra instancia ejecutándose

**Solución**:
```bash
# Windows
taskkill /F /IM node.exe

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Error: GitHub API Rate Limit

**Causa**: Excedidas las 60 peticiones/hora

**Solución**:
```javascript
// Implementar token de GitHub
const headers = {
  'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
};

// O implementar caché
const cachedData = localStorage.getItem('github_data');
if (cachedData && !isExpired(cachedData)) {
  return JSON.parse(cachedData);
}
```

### Error: "Module build failed"

**Causa**: Error de sintaxis o configuración

**Solución**:
```bash
# Limpiar caché
npm start -- --reset-cache

# Verificar sintaxis
npm run lint
```

## 🔍 Debugging

### React Developer Tools

```javascript
// Instalar extensión
// Chrome: React Developer Tools

// Ver props y state
console.log('%c Props:', 'color: blue', props);
console.log('%c State:', 'color: green', state);
```

### Network Issues

```javascript
// Verificar llamadas API
fetch(url)
  .then(res => {
    console.log('Status:', res.status);
    console.log('Headers:', res.headers);
    return res.json();
  })
  .catch(err => console.error('Error:', err));
```

### Performance Issues

```javascript
// Profiling
import { Profiler } from 'react';

<Profiler id="Proyectos" onRender={(id, phase, duration) => {
  console.log(`${id} (${phase}) took ${duration}ms`);
}}>
  <Proyectos />
</Profiler>
```

## 🧰 Herramientas Útiles

### Logs Mejorados

```javascript
// console.table para arrays
console.table(repositorios);

// console.group para organizar
console.group('API Response');
console.log('Status:', status);
console.log('Data:', data);
console.groupEnd();
```

### Source Maps

Si el error muestra líneas incorrectas:
```bash
# Habilitar source maps
GENERATE_SOURCEMAP=true npm run build
```

## 📞 Obtener Ayuda

1. **Revisar documentación**: Revisar estos docs
2. **Console logs**: Agregar logs estratégicos
3. **React DevTools**: Inspeccionar componentes
4. **GitHub Issues**: Buscar problemas similares
5. **Stack Overflow**: Buscar el error específico

## 🔄 Reset Completo

Si nada funciona:

```bash
# Limpiar todo
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# O reinstalar Node.js y empezar de cero
```
