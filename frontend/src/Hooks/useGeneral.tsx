import { useState } from "react";
import type { Modulo } from "../components/LateralMenu/LateralMenu";

export const useGeneral = () => {

      const [moduloSeleccionado, setModuloSeleccionado] = useState<string | null>(null);
    
      const modulos: Modulo[] = [
        { role: 'Alumno', name: 'Home', key: 'Home'},
        { role: 'Alumno', name: 'Calificaciones', key: 'calificaciones' },
        { role: 'Alumno', name: 'Asistencias', key: 'Asistencias' },
        { role: 'Alumno', name: 'Pagos', key: 'Pagos' },
      ];
    

    return{
        modulos,
        moduloSeleccionado,
        setModuloSeleccionado

    };
}