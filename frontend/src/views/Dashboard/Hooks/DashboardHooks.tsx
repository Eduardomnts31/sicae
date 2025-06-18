import { useState } from "react";
import Calificaciones from "../Calificaciones/Calificaciones";
import Asistencia from "../Asistencias/Asistencias";
import { Home } from "../Home/Home";

export const useDashboard = () => {

    const [componenteActivo, setComponenteActivo] = useState("asistencia");

    const renderComponente = () => {
        switch (componenteActivo) {
            case "Asistencias":
                return <Asistencia />;
            case "calificaciones":
                return <Calificaciones />;
            case "Home":
                return <Home />
            default:
                return <div>Selecciona un módulo</div>;
        }
    };

    return {
        setComponenteActivo,
        renderComponente
    };
}