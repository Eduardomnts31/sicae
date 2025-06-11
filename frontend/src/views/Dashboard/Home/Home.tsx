import { Advertisement } from "../../../components/advertisement/Advertisement";
import { CodeValidation } from "../../../components/codeValidation/CodeValidation";
import './home.scss'

export const Home = () => {
    return(
        <div className="section-home-container">
            <div className="container-top-home">
                <h2>Bienvenido, Ignacio</h2>

            </div>
            <CodeValidation/>
            <Advertisement/>

        </div>
    );
}