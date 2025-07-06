import { icon_profile } from '../../Data/imagens_data';
import './lateralMenu.scss';
import { useGeneral, type RoleNumber } from '../../Hooks/useGeneral';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import type { RootState } from '../../store/Rootstate';

export interface Modulo {
  role: string;
  name: string;
  key: string;
}

const LateralMenu: React.FC = () => {

  const userRoleNumber = useSelector((state: RootState) => Number(state.auth.user?.rol) as RoleNumber);
  const { modulos } = useGeneral({ userRoleNumber });

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (key: string) => {
    navigate(`/dashboard/${key.toLowerCase()}`);
  };

  const getActiveKey = () => {
    const path = location.pathname.toLowerCase();
    const parts = path.split('/');
    return parts[parts.length - 1];
  };

  const activeKey = getActiveKey();

  return (
    <div className="Lateral-Menu-container-left">
      <div className="container-icon-image-profile">
        <img
          className="imgae-profile"
          src={icon_profile.url}
          alt={icon_profile.alt}
        />
      </div>
      <div className="container-menu-items">
        {modulos.map((modulo) => (
          <p
            key={modulo.key}
            onClick={() => handleClick(modulo.key)}
            className={`container-navigation-menu ${
              activeKey === modulo.key.toLowerCase() ? 'selected-section' : ''
            }`}
          >
            {modulo.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LateralMenu;
