import React from 'react';
import './newchat.css';

const NewChat = () => {
  return (
    <div className="main">
      <div className="crear-nueva-sala">Crear nueva sala</div>
      <div className="form">
        <div className="input-username">
          <input type="text" className="rectangle-1" placeholder="telefono usuario" />
        </div>
        <div className="group-1">
          <button className="rectangle-2">Crear sala</button>
        </div>
      </div>
    </div>
  );
}

export default NewChat;
