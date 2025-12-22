# 009 - Vistas (Páginas)

## 📄 Vista: Inicio

**Archivo**: `src/vistas/Inicio.js`

**Ruta**: `/`

**Descripción**: Página principal con estadísticas de GitHub

**Secciones**:
- Avatar y perfil del usuario
- 4 tarjetas de estadísticas (repos, estrellas, forks, seguidores)
- Lenguajes más usados con barras de progreso
- Proyecto más popular destacado

**Datos necesarios**:
- `obtenerPerfil()`
- `obtenerEstadisticas()`

## 📄 Vista: Proyectos

**Archivo**: `src/vistas/Proyectos.js`

**Ruta**: `/proyectos`

**Descripción**: Grid de proyectos desde GitHub

**Características**:
- Búsqueda en tiempo real
- Filtros: Todos, Destacados, Recientes
- Grid responsive de tarjetas
- Contador de proyectos

**Datos necesarios**:
- `obtenerRepositorios()`

## 📄 Vista: Sobre Mí

**Archivo**: `src/vistas/SobreMi.js`

**Ruta**: `/sobre-mi`

**Descripción**: Información personal y profesional

**Secciones sugeridas**:
- Bio extendida
- Educación
- Intereses
- Timeline personal

## 📄 Vista: Habilidades

**Archivo**: `src/vistas/Habilidades.js`

**Ruta**: `/habilidades`

**Descripción**: Skills técnicas organizadas

**Categorías sugeridas**:
- Frontend
- Backend
- Herramientas
- Metodologías

## 📄 Vista: Experiencia

**Archivo**: `src/vistas/Experiencia.js`

**Ruta**: `/experiencia`

**Descripción**: Timeline de experiencia laboral

**Información por entrada**:
- Empresa/Proyecto
- Puesto
- Período
- Descripción
- Tecnologías usadas

## 📄 Vista: Contacto

**Archivo**: `src/vistas/Contacto.js`

**Ruta**: `/contacto`

**Descripción**: Formulario y enlaces de contacto

**Elementos**:
- Formulario de contacto
- Redes sociales
- Email
- GitHub
