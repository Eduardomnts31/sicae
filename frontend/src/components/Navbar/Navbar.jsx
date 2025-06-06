import { useNavigate } from "react-router-dom";
import './navbar.scss';
import { icon_profile, Logo } from "../../Data/imagens_data";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo.url} alt={Logo.alt} />
      </div>
      <div className="navbar-links">
        <p className="dashboard-return" onclick={() => navigate('/dashboad')}>Dashboard</p>
      </div>
      <div className="navbar-actions">
        <div className="profile-dropdown">
          <img src={icon_profile.url} alt={icon_profile.alt} className="profile-icon" />
          <div className="dropdown-menu">
            <div onclick={() => {}} className="dropdown-item">Ajustes</div>
            <div onclick={() => {}} className="dropdown-item">Cerrar sesión</div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Navbar;
