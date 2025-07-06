import './dashboard.scss';
import LateralMenu from "../../components/LateralMenu/LateralMenu";
import AnimationPage from '../../components/AnimationStep/AnimationStep';
import { Outlet } from 'react-router-dom';

function Dashboard() {

  return (
    <AnimationPage className="dashboard-container">
      <div className="dashboard-container-content">
        <div className="dashboard-container-left-menu">
          <LateralMenu/>
        </div>
        <div className="dashboard-section-content">
         <Outlet />
        </div>
      </div>
    </AnimationPage>
  );
}

export default Dashboard;
