// Componente de formulario de contacto
import React, { useState } from 'react';
import { useFormulario } from '../../logica/hooks/useFormulario';
import { validarEmail, validarNombre, validarMensaje } from '../../logica/utilidades/validaciones';
import { enviarEmailContacto } from '../../logica/servicios/emailService';
import './FormularioContacto.css';

const FormularioContacto = () => {
  const [enviando, setEnviando] = useState(false);
  const [mensajeRespuesta, setMensajeRespuesta] = useState('');

  const validaciones = {
    nombre: validarNombre,
    email: validarEmail,
    mensaje: validarMensaje
  };

  const {
    valores,
    errores,
    tocado,
    manejarCambio,
    manejarBlur,
    validarFormulario,
    reiniciar
  } = useFormulario(
    { nombre: '', email: '', mensaje: '' },
    validaciones
  );

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    setEnviando(true);
    const resultado = await enviarEmailContacto(valores);
    setEnviando(false);

    setMensajeRespuesta(resultado.mensaje);

    if (resultado.exito) {
      reiniciar();
      setTimeout(() => setMensajeRespuesta(''), 5000);
    }
  };

  return (
    <form className="formulario-contacto" onSubmit={manejarEnvio}>
      <div className="campo-formulario">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={valores.nombre}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          className={tocado.nombre && errores.nombre ? 'input-error' : ''}
        />
        {tocado.nombre && errores.nombre && (
          <span className="mensaje-error">{errores.nombre}</span>
        )}
      </div>

      <div className="campo-formulario">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={valores.email}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          className={tocado.email && errores.email ? 'input-error' : ''}
        />
        {tocado.email && errores.email && (
          <span className="mensaje-error">{errores.email}</span>
        )}
      </div>

      <div className="campo-formulario">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={valores.mensaje}
          onChange={manejarCambio}
          onBlur={manejarBlur}
          className={tocado.mensaje && errores.mensaje ? 'input-error' : ''}
        />
        {tocado.mensaje && errores.mensaje && (
          <span className="mensaje-error">{errores.mensaje}</span>
        )}
      </div>

      <button
        type="submit"
        className="boton-enviar"
        disabled={enviando}
      >
        {enviando ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {mensajeRespuesta && (
        <div className={`mensaje-respuesta ${mensajeRespuesta.includes('Error') ? 'error' : 'exito'}`}>
          {mensajeRespuesta}
        </div>
      )}
    </form>
  );
};

export default FormularioContacto;
