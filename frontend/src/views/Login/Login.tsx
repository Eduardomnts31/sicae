import { data } from 'react-router-dom';

import './login.scss';
import { icon_auth_1, icon_auth_2 } from '../../Data/imagens_data';
import { useLogin } from './hook/useLogin';
import InputComponent from '../../components/InputComponent/InputComponent';

const Login = () => {

    const { errors, formData, handleChange, handleSubmit } = useLogin(() => {
        console.log('Form submitted:', data);
    });

    return (
        <div className="container-section-login">
            <div className="container-login">
                <div className="container-left-login">
                    <h2 className='title-left'>SICAE</h2>
                    <p className='txt-login-left'>Sistema para consultar calificaciones, asistencias y administrar tu información académica de forma sencilla.</p>
                    <p className='txt-term-and-cond'>Terminos y Condiciones</p>
                </div>
                <div className="container-right-login">
                    <h1 className='title-right'>Iniciar sesion para <br />continuar</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <InputComponent
                            iconSrc={icon_auth_1.url}
                            placeholder="Ingresa tu email"
                            onChange={handleChange}
                            name="email"
                            type="text"
                            value={formData.email}
                        />
                        <br />
                        <InputComponent
                            iconSrc={icon_auth_2.url}
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={formData.password}

                        />
                        <br />
                        {errors.email && <span className='error'>{errors.email}</span>}
                        {errors.password && <span className='error'>{errors.password}</span>}

                        <button className='button-login-submit' type="submit">Iniciar sesion</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default Login;
