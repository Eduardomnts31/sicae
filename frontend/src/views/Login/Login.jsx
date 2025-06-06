import { data } from 'react-router-dom';
import { useLogin } from './hook/useLogin';
import './login.scss';
import InputComponent from '../../components/InputComponent/InputComponent';
import { icon_auth_1, icon_auth_2 } from '../../Data/imagens_data';

function Login() {

    const { errors, formData, handleChange, handleSubmit } = useLogin((data) => {
        console.log('Form submitted:', data);
    });

    return (
        <div className="container-section-login">
            <div className="container-login">
                <div className="container-left-login">
                    <h2 className='title-left'>Focus</h2>
                    <p className='txt-login-left'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <p className='txt-term-and-cond'>Terminos y Condiciones</p>
                </div>
                <div className="container-right-login">
                    <h1 className='title-right'>Iniciar sesion para <br />continuar</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <InputComponent
                            label="Nombre de usuario"
                            iconSrc={icon_auth_1}
                            placeholder="Ingresa tu matricula"
                            onChange={handleChange}
                        />
                        <br />
                        <InputComponent
                            label="password"
                            iconSrc={icon_auth_2}
                            onChange={handleChange}
                            placeholder="Ingresa tu contraseña"
                        />
                        <br />
                        {errors.email && <span className='error'>{errors.email}</span>}
                        {errors.password && <span className='error'>{errors.password}</span>}
                        <button type="submit">Iniciar sesion</button>
                    </form>
                </div>

            </div>

        </div>
    );
}
export default Login;
