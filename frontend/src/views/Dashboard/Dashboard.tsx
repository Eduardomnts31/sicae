import { useState } from "react";
import './dashboard.scss';
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Calificaciones from "./Calificaciones/Calificaciones";
import Asistencia from "./Asistencias/Asistencias";

function Dashboard() {
  const [componenteActivo, setComponenteActivo] = useState("asistencia");

  const renderComponente = () => {
    switch (componenteActivo) {
      case "Asistencias":
        return <Asistencia />;
      case "calificaciones":
        return <Calificaciones />;
      default:
        return <div>Selecciona un módulo</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-content">
        <div className="dashboard-container-left-menu">
          <LateralMenu onSeleccionarModulo={setComponenteActivo} />
        </div>
        <div className="dashboard-section-content">
          {renderComponente()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
