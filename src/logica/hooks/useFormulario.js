// Hook para validación de formularios
import { useState } from 'react';

export const useFormulario = (valoresIniciales, validaciones) => {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [tocado, setTocado] = useState({});

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setValores(prev => ({ ...prev, [name]: value }));
  };

  const manejarBlur = (e) => {
    const { name } = e.target;
    setTocado(prev => ({ ...prev, [name]: true }));
    validarCampo(name, valores[name]);
  };

  const validarCampo = (nombre, valor) => {
    if (validaciones && validaciones[nombre]) {
      const error = validaciones[nombre](valor);
      setErrores(prev => ({ ...prev, [nombre]: error }));
      return !error;
    }
    return true;
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    let esValido = true;

    Object.keys(valores).forEach(nombre => {
      if (validaciones && validaciones[nombre]) {
        const error = validaciones[nombre](valores[nombre]);
        if (error) {
          nuevosErrores[nombre] = error;
          esValido = false;
        }
      }
    });

    setErrores(nuevosErrores);
    return esValido;
  };

  const reiniciar = () => {
    setValores(valoresIniciales);
    setErrores({});
    setTocado({});
  };

  return {
    valores,
    errores,
    tocado,
    manejarCambio,
    manejarBlur,
    validarFormulario,
    reiniciar
  };
};
