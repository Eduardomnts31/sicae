import { icon_profile } from '../../Data/imagens_data';
import './lateralMenu.scss';
import { useGeneral, type RoleNumber } from '../../Hooks/useGeneral';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/Rootstate';

export interface LateralMenuProps {
  onSeleccionarModulo: (key: string) => void;
};

export interface Modulo {
  role: string;
  name: string;
  key: string;
};

const LateralMenu: React.FC<LateralMenuProps> = ({ onSeleccionarModulo }) => {

const userRoleNumber = useSelector((state: RootState) => Number(state.auth.user?.rol) as RoleNumber);

const { moduloSeleccionado, modulos, setModuloSeleccionado } = useGeneral({ userRoleNumber });

  

  const handleClick = (key: string) => {
    setModuloSeleccionado(key);
    onSeleccionarModulo(key);
  };

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
              moduloSeleccionado === modulo.key ? 'selected-section' : ''
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
