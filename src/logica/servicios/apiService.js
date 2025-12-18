// Servicio para peticiones API
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const obtenerDatos = async (endpoint) => {
  try {
    const respuesta = await fetch(`${BASE_URL}/${endpoint}`);
    if (!respuesta.ok) throw new Error('Error en la petición');
    return await respuesta.json();
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

export const enviarDatos = async (endpoint, datos) => {
  try {
    const respuesta = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    
    if (!respuesta.ok) throw new Error('Error al enviar datos');
    return await respuesta.json();
  } catch (error) {
    console.error('Error al enviar datos:', error);
    throw error;
  }
};

export const actualizarDatos = async (endpoint, id, datos) => {
  try {
    const respuesta = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    
    if (!respuesta.ok) throw new Error('Error al actualizar');
    return await respuesta.json();
  } catch (error) {
    console.error('Error al actualizar:', error);
    throw error;
  }
};

export const eliminarDatos = async (endpoint, id) => {
  try {
    const respuesta = await fetch(`${BASE_URL}/${endpoint}/${id}`, {
      method: 'DELETE',
    });
    
    if (!respuesta.ok) throw new Error('Error al eliminar');
    return await respuesta.json();
  } catch (error) {
    console.error('Error al eliminar:', error);
    throw error;
  }
};
