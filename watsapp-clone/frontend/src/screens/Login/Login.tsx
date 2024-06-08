import React from 'react';
import './login.css';

const LoginComponent = () => {
  return (
    <div className="log-in">
      <div className="main">
        <div className="bienvenido-de-vuelta">¡Bienvenido de vuelta!</div>
        <div className="form">
          <div className="input-username">
            <div className="rectangle-1"></div>
            <div className="nombre-de-usuario">Nombre de usuario</div>
          </div>
          <div className="input-password">
            <div className="rectangle-12"></div>
            <div className="contrase-a">Contraseña</div>
          </div>
          <div className="group-1">
            <div className="rectangle-2"></div>
            <div className="iniciar-sesi-n">Iniciar Sesión</div>
          </div>
        </div>
        <div className="a-n-no-tienes-cuenta-registrate-aqu">
          <span>
            <span className="a-n-no-tienes-cuenta-registrate-aqu-span">
              Aún no tienes cuenta?
            </span>
            <span className="a-n-no-tienes-cuenta-registrate-aqu-span2">
              Registrate aquí
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
