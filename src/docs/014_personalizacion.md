# 014 - Guía de Personalización

## 👤 Datos Personales

### Perfil GitHub

**Archivo**: `src/logica/servicios/githubService.js`

```javascript
// Línea 3
const GITHUB_USERNAME = 'TU_USUARIO_GITHUB';
```

### Información Estática

**Archivo**: `src/datos/perfil.js`

```javascript
export const informacionPersonal = {
  nombre: 'Tu Nombre Completo',
  titulo: 'Tu Título Profesional',
  descripcion: 'Breve descripción sobre ti',
  email: 'tu@email.com',
  ubicacion: 'Tu Ciudad, País',
  redesSociales: {
    github: 'https://github.com/tuusuario',
    linkedin: 'https://linkedin.com/in/tuusuario',
    twitter: 'https://twitter.com/tuusuario'
  }
};
```

## 🎨 Cambiar Colores

### Tema Principal

**Archivo**: `src/index.css`

```css
:root {
  /* Cambiar color de acento */
  --color-acento: #ff0000;        /* Rojo actual */
  /* Alternativas:
  --color-acento: #00ff00;        // Verde
  --color-acento: #0066ff;        // Azul
  --color-acento: #ff00ff;        // Magenta
  --color-acento: #ffa500;        // Naranja
  */
  
  /* Cambiar fondo */
  --color-fondo: #000000;         /* Negro actual */
  /* Alternativas:
  --color-fondo: #0a0a0a;         // Gris muy oscuro
  --color-fondo: #1a1a2e;         // Azul oscuro
  */
}
```

## 🖼️ Agregar Imágenes

### Logo

1. Colocar imagen en `public/logo.png`
2. Actualizar `src/componentes/navegacion/BarraNavegacion.js`:

```javascript
<img src="/logo.png" alt="Logo" className="logo-imagen" />
```

### Favicon

Reemplazar `public/favicon.ico` con tu ícono

### Avatar Personal

Si no quieres usar el de GitHub:

```javascript
// En Inicio.js
const avatarPersonalizado = '/img/mi-foto.jpg';
<img src={perfil?.avatar || avatarPersonalizado} />
```

## 📝 Contenido de Secciones

### Sobre Mí

**Archivo**: `src/vistas/SobreMi.js`

Agregar tu historia, educación, intereses.

### Habilidades

**Archivo**: `src/datos/habilidades.js`

```javascript
export const habilidades = [
  {
    categoria: 'Frontend',
    skills: ['React', 'JavaScript', 'CSS', 'HTML']
  },
  {
    categoria: 'Backend',
    skills: ['Node.js', 'Python', 'MongoDB']
  }
];
```

### Experiencia

**Archivo**: `src/datos/experiencia.js`

```javascript
export const experiencia = [
  {
    empresa: 'Nombre Empresa',
    puesto: 'Desarrollador Frontend',
    periodo: '2023 - Presente',
    descripcion: 'Descripción de tu rol',
    tecnologias: ['React', 'TypeScript']
  }
];
```

## 🔤 Cambiar Fuente

**Archivo**: `src/index.css`

```css
/* Importar desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

## 🌐 Idioma

Actualmente en español. Para inglés:

1. Crear `src/datos/traducciones.js`
2. Implementar sistema de i18n
3. O cambiar textos manualmente

## 📱 Meta Tags (SEO)

**Archivo**: `public/index.html`

```html
<title>Tu Nombre - Portfolio</title>
<meta name="description" content="Tu descripción SEO" />
<meta property="og:title" content="Tu Nombre" />
<meta property="og:image" content="%PUBLIC_URL%/preview.png" />
```
