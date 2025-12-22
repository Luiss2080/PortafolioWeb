# 010 - Sistema de Estilos

## 🎨 Tema Principal

### Paleta de Colores

```css
:root {
  /* Fondos */
  --color-fondo: #000000;
  --color-fondo-secundario: #0d0d0d;
  
  /* Textos */
  --color-texto-principal: #ffffff;
  --color-texto-secundario: #b0b0b0;
  
  /* Acentos */
  --color-acento: #ff0000;
  --color-acento-hover: #ff3333;
  
  /* Bordes */
  --color-borde: rgba(255, 0, 0, 0.3);
}
```

## 📏 Espaciados

```css
/* Recomendados */
padding: 1rem;      /* Pequeño */
padding: 1.5rem;    /* Medio */
padding: 2rem;      /* Grande */
padding: 3rem;      /* Extra grande */

gap: 1rem;          /* Grid/Flex spacing */
```

## 🔤 Tipografía

```css
/* Títulos */
h1 { font-size: 3rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

/* Cuerpo */
body { font-size: 1rem; }
small { font-size: 0.875rem; }
```

## 🎭 Animaciones

### Transiciones Estándar
```css
transition: all 0.3s ease;
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animaciones Keyframes
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); }
}
```

## 📱 Breakpoints

```css
/* Mobile First */
@media (max-width: 768px) {
  /* Móvil */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Tablet */
}

@media (min-width: 1025px) {
  /* Desktop */
}
```

## 🎯 Efectos Especiales

### Scrollbar Personalizado
```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #0d0d0d;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ff0000, #cc0000);
  border-radius: 6px;
}
```

### Selección de Texto
```css
::selection {
  background: rgba(255, 0, 0, 0.3);
  color: #ffffff;
}
```

## 🔧 Utilidades

```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```
