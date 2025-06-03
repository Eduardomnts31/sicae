import './login.scss';

function Login() {


  return (
    <div className="container-section-login">
        <div className="container-login">
            <div className="container-left-login">
                <h2 className='title-left'>Focus</h2>
                <p className='txt-login-left'>Hay que agregar una descripcióncorta sobre el sistema, ya sea como inickar sesion o que se puede hacer dentro.</p>
                <p className='txt-term-and-cond'>Terminos y Condiciones</p>
            </div>
            <div className="container-right-login">
                <h1 className='title-right'>Iniciar sesion para <br />continuar</h1>
                <form action="">
                    <label htmlFor="">Correo electronico:</label>
                    <input type="email" placeholder="Ingrese su correo electronico" />
                    <label htmlFor="">Password:</label>
                    <input type="password" placeholder="Ingrese su password" />
                    <button type="submit">Iniciar sesion</button>
                    <div className="container-line-login">
                        <div className="line-login"></div>
                        <p className='txt-or'>O</p>
                        <div className="line-login"></div>
                    </div>
                </form>
            </div>

        </div>

    </div>
);
}
export default Login;
