import InputCode from '../../../components/InputCode/Inputcode';
import './asistencias.scss'
function Asistencia() {

    const handleCodigoCompleto = (codigo) => {
        console.log('Código ingresado:', codigo)

    };
    return (
        <div className="container-asistencias-content">
            <h2>Ingresa el codigo asignado <br />
            por tu profesor</h2>
            <div className='container-code-input'>
                <InputCode length={6} onComplete={handleCodigoCompleto} />
            </div>
            <button>Enviar</button>

        </div>
    );
}
export default Asistencia;
