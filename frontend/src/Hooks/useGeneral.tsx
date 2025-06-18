import { useState, useEffect } from "react";
import type { Modulo } from "../components/LateralMenu/LateralMenu";

export const useGeneral = () => {
  const modulos: Modulo[] = [
    { role: 'Alumno', name: 'Home', key: 'Home'},
    // { role: 'Alumno', name: 'Calificaciones', key: 'calificaciones' },
    // { role: 'Alumno', name: 'Asistencias', key: 'Asistencias' },
    // { role: 'Alumno', name: 'Pagos', key: 'Pagos' },
  ];


const [moduloSeleccionado, setModuloSeleccionado] = useState<string>(() => {
  const saved = localStorage.getItem('moduloSeleccionado');
  console.log('Guardado en localStorage:', saved);
  console.log('Módulos disponibles:', modulos.map(m => m.key));
  if (saved && modulos.some(m => m.key === saved)) {
    return saved;
  }
  return modulos[0].key;
});


  useEffect(() => {
    if(moduloSeleccionado) {
      localStorage.setItem('moduloSeleccionado', moduloSeleccionado);
    }
  }, [moduloSeleccionado]);

  return {
    modulos,
    moduloSeleccionado,
    setModuloSeleccionado
  };
};
