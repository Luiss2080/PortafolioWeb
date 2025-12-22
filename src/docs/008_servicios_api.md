# 008 - Servicios y API

## 🌐 githubService

**Ubicación**: `src/logica/servicios/githubService.js`

### Configuración

```javascript
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'Luiss2080';
```

### Funciones Disponibles

#### obtenerPerfil()
```javascript
const perfil = await obtenerPerfil();
// Retorna: { nombre, usuario, bio, avatar, ubicacion, ... }
```

#### obtenerRepositorios(opciones)
```javascript
const repos = await obtenerRepositorios({
  ordenar: 'updated',    // 'updated' | 'created' | 'pushed'
  direccion: 'desc',     // 'asc' | 'desc'
  porPagina: 100,
  tipo: 'owner'          // 'owner' | 'all'
});
```

#### obtenerEstadisticas()
```javascript
const stats = await obtenerEstadisticas();
// Retorna: {
//   totalRepositorios,
//   totalEstrellas,
//   totalForks,
//   seguidores,
//   lenguajesPrincipales,
//   repositorioMasEstrellado
// }
```

#### obtenerProyectosDestacados(limite)
```javascript
const destacados = await obtenerProyectosDestacados(6);
// Retorna los 6 proyectos más relevantes
```

#### obtenerLenguajesRepo(nombreRepo)
```javascript
const lenguajes = await obtenerLenguajesRepo('PortafolioWeb');
// Retorna: { JavaScript: 125000, CSS: 45000, ... }
```

#### obtenerCommitsRecientes(nombreRepo, limite)
```javascript
const commits = await obtenerCommitsRecientes('PortafolioWeb', 5);
```

## 📡 Manejo de Errores

Todas las funciones usan try-catch:

```javascript
try {
  const data = await obtenerPerfil();
} catch (error) {
  console.error('Error:', error.message);
}
```

## 🔒 Límites de GitHub API

- **Sin autenticación**: 60 requests/hora
- **Con token**: 5000 requests/hora

### Implementar Token (Opcional)

```javascript
const headers = {
  'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`
};
```

## 🔄 Caché de Datos

Considera implementar caché para reducir llamadas:

```javascript
// localStorage
const CACHE_KEY = 'github_data';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos
```
