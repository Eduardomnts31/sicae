import { useState, useEffect } from "react";
import type { Modulo } from "../components/LateralMenu/LateralMenu";

export type RoleNumber = 1 | 2 | 3;

interface UseGeneralParams {
  userRoleNumber: RoleNumber;
}

export const useGeneral = ({ userRoleNumber  }: UseGeneralParams) => {

    const roleMap: Record<RoleNumber, string> = {
    1: 'Alumno',
    3: 'Administrador',
    2: 'maestro',
  };
  const userRole = roleMap[userRoleNumber];

  const allModulos: Modulo[] = [
    //rutas alumnos
    { role: 'Alumno', name: 'home', key: 'Home' },
    { role: 'Alumno', name: 'Calificaciones', key: 'calificaciones' },
    { role: 'Alumno', name: 'Asistencias', key: 'Asistencias' },
    { role: 'Alumno', name: 'Pagos', key: 'Pagos' },
    //rutas maestros
    { role: 'maestro', name: 'Home', key: 'Home' },
    { role: 'maestro', name: 'Alumnos', key: 'Alumnos' },
    { role: 'maestro', name: 'Clases', key: 'Clases' },
    //rutas administrador
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
