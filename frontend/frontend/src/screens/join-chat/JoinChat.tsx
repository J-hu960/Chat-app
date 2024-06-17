import React from 'react';
import './joinchat.css';

const JoinChat = () => {
  return (
    <div className="main">
      <div className="crear-nueva-sala">Únete a una sala nueva sala</div>
      <div className="form">
        <div className="input-username">
          <input type="text" className="rectangle-1" placeholder="llave secreta" />
        </div>
        <div className="group-1">
          <button className="rectangle-2">Unirse</button>
        </div>
      </div>
    </div>
  );
}

export default JoinChat;
