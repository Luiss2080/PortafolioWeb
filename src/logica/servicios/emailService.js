// Servicio para envío de emails de contacto
export const enviarEmailContacto = async (datos) => {
  try {
    // Simulación de envío (reemplazar con API real)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Email enviado:', datos);
    
    return {
      exito: true,
      mensaje: '¡Mensaje enviado correctamente!'
    };
  } catch (error) {
    return {
      exito: false,
      mensaje: 'Error al enviar el mensaje. Intenta nuevamente.'
    };
  }
};

export const suscribirseNewsletter = async (email) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Suscripción:', email);
    
    return {
      exito: true,
      mensaje: '¡Gracias por suscribirte!'
    };
  } catch (error) {
    return {
      exito: false,
      mensaje: 'Error en la suscripción.'
    };
  }
};
