
import './dashboard.scss';
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import { useDashboard } from './Hooks/DashboardHooks';

function Dashboard() {
  const {setComponenteActivo, renderComponente} = useDashboard();

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
