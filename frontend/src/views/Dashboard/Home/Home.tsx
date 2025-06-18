
import { useSelector } from "react-redux";
import { Advertisement } from "../../../components/advertisement/Advertisement";
import './home.scss'
import type { RootState } from "../../../store/Rootstate";
import InputCode from "../../../components/InputCode/Inputcode";


export const Home = () => {
    const {user} = useSelector((state: RootState) => state.auth)
    return(
        <div className="section-home-container">
            <div className="container-top-home">
                {

                <h2>Bienvenido, { user?.rol}</h2>
                }

            </div>
            <InputCode mode="estudiante" onComplete={() => console.log('cidgo valido, code')}></InputCode>
            <InputCode mode="maestro"></InputCode>
            <Advertisement/>

        </div>
    );
}