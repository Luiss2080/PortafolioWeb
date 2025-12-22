# 005 - Guía de Componentes

## 🧩 Componentes del Proyecto

### Componentes de Animación

#### Cargador
**Ubicación**: [`src/componentes/animaciones/Cargador.js`](src/componentes/animaciones/Cargador.js)

Spinner de carga con mensaje personalizable.

```jsx
import Cargador from './componentes/animaciones/Cargador';

<Cargador texto="Cargando proyectos..." />
```

**Props:**
- `texto` (string): Mensaje a mostrar (default: "Cargando...")

#### ContenedorAnimado
**Ubicación**: [`src/componentes/animaciones/ContenedorAnimado.js`](src/componentes/animaciones/ContenedorAnimado.js)

Wrapper que agrega animaciones de entrada a sus hijos.

```jsx
import ContenedorAnimado from './componentes/animaciones/ContenedorAnimado';

<ContenedorAnimado animacion="fadeIn">
  <h1>Contenido animado</h1>
</ContenedorAnimado>
```

**Props:**
- `children` (node): Contenido a animar
- `animacion` (string): Tipo de animación ('fadeIn', 'slideUp')
- `className` (string): Clases CSS adicionales

---

### Componentes de Navegación

#### BarraNavegacion
**Ubicación**: [`src/componentes/navegacion/BarraNavegacion.js`](src/componentes/navegacion/BarraNavegacion.js)

Header con navegación principal y responsive.

```jsx
import BarraNavegacion from './componentes/navegacion/BarraNavegacion';

<BarraNavegacion />
```

**Características:**
- Logo LUISSXD con gradiente rojo
- Menú de navegación con 6 secciones
- Menú hamburguesa para móvil
- Efecto de scroll con sombra
- Links activos resaltados

**Rutas:**
- Inicio
- Sobre Mí
- Proyectos
- Habilidades
- Experiencia
- Contacto

#### PiePagina
**Ubicación**: [`src/componentes/navegacion/PiePagina.js`](src/componentes/navegacion/PiePagina.js)

Footer con redes sociales y copyright.

```jsx
import PiePagina from './componentes/navegacion/PiePagina';

<PiePagina />
```

**Contenido:**
- Redes sociales (GitHub, LinkedIn, Twitter)
- Copyright con año dinámico
- Enlaces adicionales

---

### Componentes de Tarjetas

#### TarjetaProyecto
**Ubicación**: [`src/componentes/tarjetas/TarjetaProyecto.js`](src/componentes/tarjetas/TarjetaProyecto.js)

Card para mostrar proyectos de GitHub.

```jsx
import TarjetaProyecto from './componentes/tarjetas/TarjetaProyecto';

<TarjetaProyecto proyecto={proyectoData} />
```

**Props:**
- `proyecto` (object):
  ```javascript
  {
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
  ```

**Características:**
- Indicador de última actualización
- Badge del lenguaje principal
- Tags de temas/tecnologías
- Estadísticas (estrellas y forks)
- Animaciones hover
- Enlaces a GitHub y demo

#### TarjetaHabilidad
**Ubicación**: [`src/componentes/tarjetas/TarjetaHabilidad.js`](src/componentes/tarjetas/TarjetaHabilidad.js)

Card para mostrar habilidades técnicas.

```jsx
import TarjetaHabilidad from './componentes/tarjetas/TarjetaHabilidad';

<TarjetaHabilidad habilidad={habilidadData} />
```

**Props:**
- `habilidad` (object):
  ```javascript
  {
    nombre: string,
    icono: string,
    nivel: number,
    categoria: string
  }
  ```

#### TarjetaExperiencia
**Ubicación**: [`src/componentes/tarjetas/TarjetaExperiencia.js`](src/componentes/tarjetas/TarjetaExperiencia.js)

Card para experiencia laboral.

```jsx
import TarjetaExperiencia from './componentes/tarjetas/TarjetaExperiencia';

<TarjetaExperiencia experiencia={experienciaData} />
```

**Props:**
- `experiencia` (object):
  ```javascript
  {
    puesto: string,
    empresa: string,
    periodo: string,
    descripcion: string,
    logros: array
  }
  ```

---

### Componentes de Formularios

#### FormularioContacto
**Ubicación**: [`src/componentes/formularios/FormularioContacto.js`](src/componentes/formularios/FormularioContacto.js)

Formulario de contacto con validación.

```jsx
import FormularioContacto from './componentes/formularios/FormularioContacto';

<FormularioContacto />
```

**Campos:**
- Nombre (requerido)
- Email (requerido, validación)
- Asunto (requerido)
- Mensaje (requerido, min 10 caracteres)

**Características:**
- Validación en tiempo real
- Mensajes de error descriptivos
- Estados de carga y éxito
- Integración con emailService

---

## 🎯 Componentes de Vistas

### Vista Inicio
**Ubicación**: [`src/vistas/Inicio.js`](src/vistas/Inicio.js)

Página principal con estadísticas de GitHub.

**Secciones:**
1. Hero con avatar y bio
2. Grid de estadísticas (4 cards)
3. Lenguajes más usados
4. Proyecto más popular

**Datos de GitHub:**
- Avatar del usuario
- Nombre y bio
- Total de repositorios
- Estrellas totales
- Forks totales
- Seguidores

### Vista Proyectos
**Ubicación**: [`src/vistas/Proyectos.js`](src/vistas/Proyectos.js)

Listado de repositorios con búsqueda y filtros.

**Características:**
- Grid responsive de proyectos
- Barra de búsqueda en tiempo real
- Filtros: Todos, Destacados, Recientes
- Estadísticas agregadas en footer
- Estado de carga con Cargador

### Vista SobreMi
**Ubicación**: [`src/vistas/SobreMi.js`](src/vistas/SobreMi.js)

Información personal y profesional.

### Vista Habilidades
**Ubicación**: [`src/vistas/Habilidades.js`](src/vistas/Habilidades.js)

Grid de habilidades técnicas.

### Vista Experiencia
**Ubicación**: [`src/vistas/Experiencia.js`](src/vistas/Experiencia.js)

Timeline de experiencia laboral.

### Vista Contacto
**Ubicación**: [`src/vistas/Contacto.js`](src/vistas/Contacto.js)

Formulario de contacto con información adicional.

---

## 📝 Convenciones de Componentes

### Estructura de un Componente

```javascript
// 1. Imports
import React, { useState } from 'react';
import './Componente.css';

// 2. Componente
const MiComponente = ({ prop1, prop2 }) => {
  // 3. Estados
  const [estado, setEstado] = useState(null);
  
  // 4. Efectos y handlers
  useEffect(() => {
    // lógica
  }, []);
  
  // 5. Render
  return (
    <div className="mi-componente">
      {/* JSX */}
    </div>
  );
};

// 6. Export
export default MiComponente;
```

### Estilos de Componente

```css
/* NombreComponente.css */

/* Contenedor principal */
.nombre-componente {
  /* estilos */
}

/* Elementos internos */
.nombre-componente__elemento {
  /* estilos */
}

/* Modificadores */
.nombre-componente--variante {
  /* estilos */
}
```

---

## 🔄 Reutilización de Componentes

### Exportaciones Centralizadas

Cada carpeta de componentes tiene un `index.js`:

```javascript
// componentes/tarjetas/index.js
export { default as TarjetaProyecto } from './TarjetaProyecto';
export { default as TarjetaHabilidad } from './TarjetaHabilidad';
export { default as TarjetaExperiencia } from './TarjetaExperiencia';
```

**Uso:**
```javascript
import { TarjetaProyecto, TarjetaHabilidad } from './componentes/tarjetas';
```

---

📚 **Próximo documento**: `006_hooks.md` - Guía de Custom Hooks
