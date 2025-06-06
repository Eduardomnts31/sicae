import { useState } from "react";
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import Navbar from "../../components/Navbar/Navbar";
import './dashboard.scss';
import Asistencia from "./Asistencias/Asistencias";
import Calificaciones from "./Calificaciones/Calificaciones";

function Dashboard() {
  const [componenteActivo, setComponenteActivo] = useState("asistencia");

  const renderComponente = () => {
    switch (componenteActivo) {
      case "asistencia":
        return <Asistencia />;
      case "calificaciones":
        return <Calificaciones />;
      default:
        return <div>Selecciona un módulo</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-container-top-menu">
        <Navbar />
      </div>
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
