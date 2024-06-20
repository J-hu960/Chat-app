import React, { useState } from 'react';
import './joinchat.css';
import axios from 'axios';

const JoinChat = () => {
  const [key,setKey]=useState<string>('')
  const handleJoinChat=async(e:React.FormEvent)=>{
    e.preventDefault()
    const token =  localStorage.getItem('token');
    const response = await axios.patch('http://localhost:5100/api/v1/whatsclone/chats', {secret:key},{
      headers:{
        'Authorization': `Bearer ${token}`
      },
     
    })
  
  }


  return (
    <div className="main">
      <div className="crear-nueva-sala">Únete a una sala nueva sala</div>
      <form onSubmit={handleJoinChat} className="form">
        <div className="input-username">
          <input onChange={e=>setKey(e.target.value)} type="text" className="rectangle-1" placeholder="llave secreta" />
        </div>
        <div className="group-1">
          <button className="rectangle-2">Unirse</button>
        </div>
      </form>
    </div>
  );
}

export default JoinChat;
