import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
const LoginComponent = () => {
  const [nombre,setNombre] = useState<string>('')
  const [contra,setContra] = useState<string>('')

  const handleLogin =async (e:React.FormEvent)=>{
    // "Email":"jordi@gmail.com",
    // "Password":"21912191"
   
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5100/api/v1/whatsclone/auth/signIn',{
        Email:nombre,
        Password:contra
      })
      console.log(response.data)
      localStorage.setItem('token',response.data)
      
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <div className="log-in">
      <div className="main">
        <div className="bienvenido-de-vuelta">¡Bienvenido de vuelta!</div>
        <form onSubmit={e=>handleLogin(e)} className="form">
          <div className="input-username">
            <input value={nombre} onChange={e=>setNombre(e.target.value)} type='text' className="rectangle-1" />
            <div className="nombre-de-usuario">Nombre de usuario</div>
          </div>
          <div className="input-password">
          <input value={contra} onChange={e=>setContra(e.target.value)} type='password' className="rectangle-12" />
          <div className="contrase-a">Contraseña</div>
          </div>
          <div className="group-1">
            <div className="rectangle-2"></div>
            <input value={'Iniciar Sesión'} type='submit' className="iniciar-sesi-n" />
          </div>
        </form>
  
      </div>
    </div>
  );
}

export default LoginComponent;
