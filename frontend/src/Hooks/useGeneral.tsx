import { useState, useEffect } from "react";
import type { Modulo } from "../components/LateralMenu/LateralMenu";

export type RoleNumber = 1 | 2 | 3;

interface UseGeneralParams {
  userRoleNumber: RoleNumber;
}

export const useGeneral = ({ userRoleNumber  }: UseGeneralParams) => {

    const roleMap: Record<RoleNumber, string> = {
      1: 'Administrador',
      3: 'Maestro',
      2: 'Alumno',
  };
  const userRole = roleMap[userRoleNumber];

  const allModulos: Modulo[] = [
    //rutas alumnos
    { role: 'Alumno', name: 'Home', key: 'Home' },
    { role: 'Alumno', name: 'Calificaciones', key: 'calificaciones' },
    { role: 'Alumno', name: 'Asistencias', key: 'Asistencias' },
    { role: 'Alumno', name: 'Pagos', key: 'Pagos' },
    //rutas maestros
    { role: 'Maestro', name: 'Home', key: 'Home' },
    { role: 'Maestro', name: 'Alumnos', key: 'Alumnos' },
    { role: 'Maestro', name: 'Clases', key: 'Clases' },
    //rutas administrador
    { role: 'Administrador', name: 'Home', key: 'Home' },
    { role: 'Administrador', name: 'Usuarios', key: 'Usuarios' },
    { role: 'Administrador', name: 'Reportes', key: 'Reportes' },
  ];

  const modulos = allModulos.filter(m => m.role === userRole);

  const [moduloSeleccionado, setModuloSeleccionado] = useState<string>(() => {
    const saved = localStorage.getItem('moduloSeleccionado');
    if (saved && modulos.some(m => m.key === saved)) {
      return saved;
    }
    return modulos.length > 0 ? modulos[0].key : '';
  });

  useEffect(() => {
    if (moduloSeleccionado) {
      localStorage.setItem('moduloSeleccionado', moduloSeleccionado);
    }
  }, [moduloSeleccionado]);

  return {
    modulos,
    moduloSeleccionado,
    setModuloSeleccionado,
  };
};
