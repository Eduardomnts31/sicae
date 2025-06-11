import { useState } from 'react';
import { icon_profile } from '../../Data/imagens_data';
import './lateralMenu.scss';

type LateralMenuProps = {
  onSeleccionarModulo: (key: string) => void;
};

type Modulo = {
  role: string;
  name: string;
  key: string;
};

const LateralMenu: React.FC<LateralMenuProps> = ({ onSeleccionarModulo }) => {
  const [moduloSeleccionado, setModuloSeleccionado] = useState<string | null>(null);

  const modulos: Modulo[] = [
    { role: 'Alumno', name: 'Home', key: 'Home'},
    { role: 'Alumno', name: 'Calificaciones', key: 'calificaciones' },
    { role: 'Alumno', name: 'Asistencias', key: 'Asistencias' },
    { role: 'Alumno', name: 'Pagos', key: 'Pagos' },
  ];

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
