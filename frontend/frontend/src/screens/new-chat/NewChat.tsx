import React, { useState } from 'react';
import './newchat.css';
import axios from 'axios';

const NewChat = () => {
    const [key,setKey] = useState<string>('')
    const [title,setTitle] = useState<string>('')

    const handleCrearSala = async (e: React.FormEvent) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
  
      try {
        const response = await axios.post(
          'http://localhost:5100/api/v1/whatsclone/chats',
          {
            title: title,
            secret: key,
          },
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };


  //      const response = await axios.post('http://localhost:5100/api/v1/whatsclone/auth/signIn',{title:string
   // secret:string }

  return (
    <div className="main">
      <div className="crear-nueva-sala">Crear nueva sala</div>
      <p>Introduce una llave secreta, y compartela con quien quieras que se una a la sala</p>
      <form onSubmit={handleCrearSala} className="form">
        <div className="input-username">
          <input onChange={e=>setKey(e.target.value)} type="text" className="rectangle-1" placeholder="llave secreta" />
        </div>
        <div className="input-username">
          <input onChange={e=>setTitle(e.target.value)}  type="text" className="rectangle-12" placeholder="titulo" />
        </div>
        
        
        <div className="group-1">
          <button className="rectangle-2">Crear sala</button>
        </div>
      </form>
    </div>
  );
}

export default NewChat;
