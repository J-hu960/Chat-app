import React from 'react';
import './login.css';

const LoginComponent = () => {
  return (
    <div className="log-in">
      <div className="main">
        <div className="bienvenido-de-vuelta">¡Bienvenido de vuelta!</div>
        <div className="form">
          <div className="input-username">
            <input type='text' className="rectangle-1" />
            <div className="nombre-de-usuario">Nombre de usuario</div>
          </div>
          <div className="input-password">
          <input type='password' className="rectangle-12" />
          <div className="contrase-a">Contraseña</div>
          </div>
          <div className="group-1">
            <div className="rectangle-2"></div>
            <div className="iniciar-sesi-n">Iniciar Sesión</div>
          </div>
        </div>
        <div className="a-n-no-tienes-cuenta-registrate-aqu">
          <span>
           
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
