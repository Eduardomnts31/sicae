import { useSelector } from "react-redux";
// import { Advertisement } from "../../../components/advertisement/Advertisement";
import './home.scss';
import type { RootState } from "../../../store/Rootstate";
import InputCode from "../../../components/InputCode/Inputcode";

const rolMap: Record<string, string> = {
  "1": "admin",
  "2": "maestro",
  "3": "alumno",
};

export const Home = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) return <div>Cargando...</div>;

  const rolNombre = rolMap[user.rol] || "Desconocido";

  return (
    <div className="section-home-container">
      <div className="container-top-home">
        <h2>Bienvenido, {user.nombre} ({rolNombre})</h2>
        <h4>Permisos tipo: {user.nombreRol}</h4>
      </div>

    {rolNombre === "estudiante" && (
      <InputCode
        mode="estudiante"
        onComplete={() => console.log("Código válido para estudiante")}
      />
    )}

    {rolNombre === "maestro" && (
      <InputCode
        mode="maestro"
        onComplete={() => console.log("Código generado por maestro")}
      />
    )}
      {/* <Advertisement /> */}
    </div>
  );
};
