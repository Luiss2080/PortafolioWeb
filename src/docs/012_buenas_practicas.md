# 012 - Buenas Prácticas

## 📝 Código

### Componentes

✅ **Hacer**:
- Componentes pequeños y enfocados
- Un componente por archivo
- Props bien documentadas
- PropTypes o TypeScript

❌ **Evitar**:
- Componentes de más de 200 líneas
- Lógica compleja en componentes de UI
- Props sin validación

### Hooks

✅ **Hacer**:
```javascript
// Nombres descriptivos
const { datos: repositorios, cargando } = useGitHub(fetchRepos);

// Cleanup de efectos
useEffect(() => {
  const timer = setTimeout(...);
  return () => clearTimeout(timer);
}, []);
```

❌ **Evitar**:
```javascript
// Nombres genéricos
const { data } = useGitHub(fetchRepos);

// Sin cleanup
useEffect(() => {
  setInterval(...); // Memory leak
}, []);
```

## 🎨 Estilos

### CSS Modular

✅ **Hacer**:
- Un archivo CSS por componente
- Nombres de clases descriptivos
- Variables CSS para colores
- Mobile-first approach

❌ **Evitar**:
- Estilos inline excesivos
- !important innecesario
- Selectores demasiado específicos

## 🚀 Rendimiento

### Optimizaciones

```javascript
// Lazy loading de componentes
const Proyectos = lazy(() => import('./vistas/Proyectos'));

// Memoización
const resultado = useMemo(() => calcularAlgo(data), [data]);

// Callbacks memoizados
const handleClick = useCallback(() => {...}, [deps]);
```

### Imágenes

- Usar formatos modernos (WebP, AVIF)
- Lazy loading con `loading="lazy"`
- Dimensiones específicas
- Compresión adecuada

## 🔒 Seguridad

### API Calls

```javascript
// ✅ Validar respuestas
if (!response.ok) {
  throw new Error(`Error: ${response.status}`);
}

// ✅ Sanitizar datos
const safeData = DOMPurify.sanitize(userData);

// ❌ No exponer tokens
// NUNCA: const token = 'ghp_xxxxx';
// SÍ: const token = process.env.REACT_APP_TOKEN;
```

## 📦 Git

### Commits

✅ **Formato**:
```
tipo(alcance): mensaje

feat(proyectos): agregar filtro por lenguaje
fix(api): corregir timeout en GitHub API
docs(readme): actualizar instrucciones
```

### Branches

- `main`: producción
- `develop`: desarrollo
- `feature/nombre`: nuevas características
- `fix/nombre`: correcciones

## 🧪 Testing

```javascript
// Testear componentes críticos
test('TarjetaProyecto muestra datos correctamente', () => {
  render(<TarjetaProyecto proyecto={mockData} />);
  expect(screen.getByText('Proyecto Test')).toBeInTheDocument();
});
```

## 📖 Documentación

- README actualizado
- Comentarios en código complejo
- JSDoc en funciones públicas
- CHANGELOG para versiones
