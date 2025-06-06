import './lateralMenu.scss';

function LateralMenu({ onSeleccionarModulo }) {
  const modulos = [
    { name: 'Asistencia', key: 'asistencia' },
    { name: 'Calificaciones', key: 'calificaciones' },
  ];

  return (
    <div className="Lateral-Menu-container-left">
      <div className="container-menu-items">
        {modulos.map((modulo, index) => (
          <p
            key={index}
            onClick={() => onSeleccionarModulo(modulo.key)}
            className="container-navigation-menu"
          >
            {modulo.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default LateralMenu;
