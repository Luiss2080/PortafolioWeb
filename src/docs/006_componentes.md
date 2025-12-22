# 006 - Guía de Componentes

## 🧩 Componentes Principales

### TarjetaProyecto

**Ubicación**: `src/componentes/tarjetas/TarjetaProyecto.js`

**Propósito**: Muestra información de un proyecto de GitHub

**Props**:
```javascript
{
  proyecto: {
    nombre: string,
    descripcion: string,
    lenguaje: string,
    temas: array,
    url: string,
    homepage: string,
    estrellas: number,
    forks: number,
    fechaActualizacion: string
  }
}
```

**Uso**:
```jsx
<TarjetaProyecto proyecto={miProyecto} />
```

### ContenedorAnimado

**Ubicación**: `src/componentes/animaciones/ContenedorAnimado.js`

**Propósito**: Wrapper con animaciones de entrada

**Props**:
```javascript
{
  children: ReactNode,
  animacion: 'fadeIn' | 'slideUp' | 'slideIn',
  className: string
}
```

### Cargador

**Ubicación**: `src/componentes/animaciones/Cargador.js`

**Propósito**: Indicador de carga animado

**Props**:
```javascript
{
  texto: string  // Opcional
}
```

### BarraNavegacion

**Ubicación**: `src/componentes/navegacion/BarraNavegacion.js`

**Propósito**: Navegación principal del sitio

**Características**:
- Responsive con menú hamburguesa
- Links con efecto hover
- Logo animado

### PiePagina

**Ubicación**: `src/componentes/navegacion/PiePagina.js`

**Propósito**: Footer con información de contacto

## 🎨 Estilos de Componentes

Cada componente tiene su propio archivo CSS con el mismo nombre:
- `TarjetaProyecto.css`
- `BarraNavegacion.css`
- etc.

## 📦 Exportaciones

Usar el patrón de index para exportaciones:

```javascript
// componentes/tarjetas/index.js
export { default as TarjetaProyecto } from './TarjetaProyecto';
export { default as TarjetaHabilidad } from './TarjetaHabilidad';
```
