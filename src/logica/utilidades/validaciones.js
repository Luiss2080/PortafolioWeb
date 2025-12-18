// Utilidades de validación
export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'El email es requerido';
  if (!regex.test(email)) return 'Email inválido';
  return '';
};

export const validarNombre = (nombre) => {
  if (!nombre || nombre.trim().length === 0) return 'El nombre es requerido';
  if (nombre.length < 2) return 'El nombre debe tener al menos 2 caracteres';
  return '';
};

export const validarMensaje = (mensaje) => {
  if (!mensaje || mensaje.trim().length === 0) return 'El mensaje es requerido';
  if (mensaje.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
  return '';
};

export const validarTelefono = (telefono) => {
  const regex = /^[0-9]{9,15}$/;
  if (!telefono) return '';
  if (!regex.test(telefono.replace(/\s/g, ''))) return 'Teléfono inválido';
  return '';
};

export const validarURL = (url) => {
  try {
    new URL(url);
    return '';
  } catch {
    return 'URL inválida';
  }
};
