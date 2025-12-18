<div align="center">

# 🚀 Luiss.dev

### _Tu carta de presentación digital, redefinida_

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## 💡 La Idea

> **Luiss.dev** es más que un portfolio: es una experiencia visual interactiva que combina diseño moderno, animaciones fluidas y una arquitectura de código limpia y escalable.

Cada componente, cada animación y cada línea de código están diseñados para contar tu historia profesional de manera memorable.

---

## ✨ ¿Qué hace especial a este proyecto?

```
🎨 Diseño Premium         →  Gradientes modernos y efectos visuales cautivadores
⚡ Rendimiento Ultra       →  Código modular optimizado para velocidad
🎭 Animaciones Cinemáticas →  Transiciones suaves con Framer Motion
📱 100% Responsivo         →  Experiencia perfecta en cualquier dispositivo
🧩 Arquitectura Modular    →  Archivos pequeños, nombres descriptivos en español
🎯 SEO Optimizado          →  Preparado para el éxito en buscadores
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Propósito | Superpoder |
|------------|-----------|------------|
| **React.js** | Framework principal | Componentes reutilizables y estado reactivo |
| **TailwindCSS** | Estilos | Diseño rápido sin salir del HTML |
| **Framer Motion** | Animaciones | Movimientos fluidos profesionales |
| **React Router** | Navegación | Transiciones instantáneas entre páginas |

---

## 🚀 Inicio Rápido

```bash
# 1. Instala las dependencias
npm install

# 2. Inicia el servidor de desarrollo
npm start

# 3. Abre tu navegador en
http://localhost:3000
```

**¡Listo!** Tu portfolio está corriendo 🎉

---

## 📁 Arquitectura del Proyecto

```
src/
├── 📱 vistas/              # Páginas principales de la aplicación
│   ├── Inicio.js           # Página de bienvenida con animaciones hero
│   ├── SobreMi.js          # Historia profesional y habilidades
│   ├── Proyectos.js        # Galería interactiva de trabajos
│   ├── Habilidades.js      # Showcase de competencias técnicas
│   └── Contacto.js         # Formulario y redes sociales
│
├── 🧩 componentes/         # Componentes reutilizables organizados por función
│   ├── navegacion/         # Sistema de navegación
│   ├── tarjetas/           # Cards de proyectos, habilidades, etc.
│   ├── formularios/        # Inputs y forms validados
│   └── animaciones/        # Wrappers de Framer Motion
│
├── 🎨 estilos/             # Estilos CSS modulares
│   ├── globales.css        # Reset y estilos base
│   ├── navegacion.css      # Estilos del navbar y footer
│   └── componentes.css     # Estilos de componentes específicos
│
├── ⚙️ logica/              # Lógica de negocio separada
│   ├── hooks/              # Custom hooks de React
│   ├── utilidades/         # Funciones helper
│   └── servicios/          # Llamadas a APIs y servicios externos
│
├── 📊 datos/               # Data estática y configuración
│   ├── proyectos.js        # Lista de proyectos destacados
│   ├── habilidades.js      # Skills y tecnologías
│   └── configuracion.js    # Constantes y settings globales
│
└── 🖼️ recursos/            # Assets estáticos
    ├── imagenes/           # Fotos y gráficos
    └── iconos/             # SVGs e iconografía
```

### 🎯 Filosofía de Arquitectura

- **Archivos pequeños**: Máximo 100-150 líneas por archivo
- **Nombres descriptivos**: Todo en español, sin abreviaturas confusas
- **Separación de concerns**: Lógica, vistas y estilos bien separados
- **Fácil de mantener**: Cualquiera puede entender el código

---

## 🎨 Personalización Fácil

### Cambiar Colores del Tema
Edita `tailwind.config.js`:

```javascript
colors: {
  primario: "#0f172a",    // Azul oscuro profundo
  secundario: "#1e293b",  // Gris pizarra
  acento: "#3b82f6",      // Azul vibrante
}
```

### Agregar Tus Proyectos
Edita `src/datos/proyectos.js`:

```javascript
export const misProyectos = [
  {
    titulo: "Mi Proyecto Increíble",
    descripcion: "Aplicación revolucionaria...",
    tecnologias: ["React", "Node.js"],
    imagen: "/proyectos/mi-app.jpg",
    enlace: "https://mi-proyecto.com"
  }
]
```

### Personalizar Animaciones
Modifica `src/componentes/animaciones/AnimacionFadeIn.js` a tu gusto.

---

## 📦 Scripts Disponibles

| Comando | Acción |
|---------|--------|
| `npm start` | Inicia servidor de desarrollo en `localhost:3000` |
| `npm run build` | Crea build optimizado para producción |
| `npm test` | Ejecuta los tests unitarios |
| `npm run eject` | ⚠️ Expone configuración (irreversible) |

---

## 🎯 Próximos Pasos

- [ ] 📝 Personaliza tu información en `/datos/configuracion.js`
- [ ] 📸 Agrega tus imágenes en `/recursos/imagenes/`
- [ ] 💼 Completa tus proyectos en `/datos/proyectos.js`
- [ ] 🎨 Ajusta los colores del tema a tu marca personal
- [ ] 📧 Conecta el formulario de contacto con tu backend
- [ ] 🚀 Despliega en Vercel, Netlify o GitHub Pages

---

## 🌟 Características Destacadas

<table>
<tr>
<td width="50%">

### 🎭 Animaciones Pro
- Entrada progresiva de elementos
- Hover effects suaves
- Scroll animations
- Transiciones de página fluidas

</td>
<td width="50%">

### 📱 Responsive First
- Mobile-first approach
- Breakpoints optimizados
- Touch gestures
- Imágenes adaptativas

</td>
</tr>
<tr>
<td>

### ⚡ Performance
- Code splitting automático
- Lazy loading de imágenes
- CSS minificado
- Bundle size optimizado

</td>
<td>

### 🧩 Modular
- Componentes reutilizables
- Hooks personalizados
- Utilidades compartidas
- Fácil de extender

</td>
</tr>
</table>

---

## 📚 Documentación y Recursos

- 📘 [Guía de React](https://reactjs.org/docs) - Aprende React desde cero
- 🎨 [TailwindCSS Docs](https://tailwindcss.com/docs) - Utilidades CSS
- 🎬 [Framer Motion](https://www.framer.com/motion/) - Animaciones avanzadas
- 🗺️ [React Router](https://reactrouter.com/) - Navegación SPA

---

<div align="center">

## 💫 Hecho con Pasión

**Luiss.dev** © 2025 - Código limpio, diseño profesional

[⭐ Estrella este proyecto](https://github.com/tuusuario/luiss-dev) • [🐛 Reportar Bug](https://github.com/tuusuario/luiss-dev/issues) • [💡 Sugerir Feature](https://github.com/tuusuario/luiss-dev/issues)

---

_Desarrollado con ❤️, ☕ y mucho código_

</div>
