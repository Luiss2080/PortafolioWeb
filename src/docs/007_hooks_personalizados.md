# 007 - Hooks Personalizados

## 🪝 useGitHub

**Ubicación**: `src/logica/hooks/useGitHub.js`

**Propósito**: Cargar datos de GitHub con manejo de estados

**Sintaxis**:
```javascript
const { datos, cargando, error, recargar } = useGitHub(
  fetchFunction,
  dependencies
);
```

**Parámetros**:
- `fetchFunction`: Función asíncrona que retorna datos
- `dependencies`: Array de dependencias (opcional)

**Retorna**:
```javascript
{
  datos: any | null,        // Datos obtenidos
  cargando: boolean,        // Estado de carga
  error: string | null,     // Mensaje de error
  recargar: () => void      // Función para recargar
}
```

**Ejemplo**:
```javascript
const { datos: repositorios, cargando } = useGitHub(
  () => obtenerRepositorios({ ordenar: 'updated' })
);
```

## 🪝 useAnimacionScroll

**Ubicación**: `src/logica/hooks/useAnimacionScroll.js`

**Propósito**: Detectar scroll y animar elementos

**Uso**:
```javascript
const { scrollY, direccion } = useAnimacionScroll();
```

## 🪝 useTamañoVentana

**Ubicación**: `src/logica/hooks/useTamañoVentana.js`

**Propósito**: Obtener dimensiones de la ventana

**Uso**:
```javascript
const { ancho, alto, esMobile } = useTamañoVentana();
```

## 🪝 useFormulario

**Ubicación**: `src/logica/hooks/useFormulario.js`

**Propósito**: Manejar estado de formularios

**Uso**:
```javascript
const { valores, handleChange, resetear } = useFormulario({
  nombre: '',
  email: ''
});
```

## 🪝 useInterseccion

**Ubicación**: `src/logica/hooks/useInterseccion.js`

**Propósito**: Detectar cuando un elemento es visible

**Uso**:
```javascript
const [ref, esVisible] = useInterseccion({
  threshold: 0.1
});
```

## 📝 Convenciones

- Todos los hooks empiezan con `use`
- Retornan objetos para mejor legibilidad
- Manejan limpieza en el cleanup
