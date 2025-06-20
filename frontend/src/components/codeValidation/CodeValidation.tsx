import InputCode from "../InputCode/Inputcode";
import './CodeValidation.scss'



export const CodeValidation = () => {

      const handleCodigoCompleto = (codigo: string) => {
    console.log('Código ingresado:', codigo);
  };

    return(
    <div className="container-code-validate-content">
      <h2>
        Ingresa el código asignado <br />
        por tu profesor
      </h2>
      <div className="container-code-input">
        <InputCode length={6} onComplete={handleCodigoCompleto} />
      </div>
      <button>Enviar</button>
    </div>
    );
}