import React from 'react';
import './newchat.css';

const NewChat = () => {
  return (
    <div className="main">
      <div className="crear-nueva-sala">Crear nueva sala</div>
      <p>Introduce una llave secreta, y compartela con quien quieras que se una a la sala</p>
      <div className="form">
        <div className="input-username">
          <input type="text" className="rectangle-1" placeholder="llave secreta" />
        </div>
        <div className="input-username">
          <input type="text" className="rectangle-12" placeholder="titulo" />
        </div>
        
        
        <div className="group-1">
          <button className="rectangle-2">Crear sala</button>
        </div>
      </div>
    </div>
  );
}

export default NewChat;
