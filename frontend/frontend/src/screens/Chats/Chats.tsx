import React, { useEffect } from 'react';
import './chats.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../routes';
import ChatPreview from '../../components/ChatPreview';
import axios from 'axios';
const Chats = () => {

  const findUsersChats = async () => {
    const token =  localStorage.getItem('token');
    console.log(token)
    try {
      const response = await axios.get('http://localhost:5100/api/v1/whatsclone/chats',{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
  useEffect(()=>{
     findUsersChats()
  },[])



  return (
    <div className="chats">
      <div className="frame-1">
        <div className="chats2">Chats</div>
      </div>
      <div className="group-2 flex items-center justify-around">
        <form action="">
           <input type='text' placeholder='buscar Chat' className="rectangle-3 text-start pl-6"></input>
        </form>
        <Link className='link p-3 rounded-full font-bold' to={`/${PrivateRoutes.JOINCHAT}`}>Unirse a sala</Link>
        </div>
      <div className="frame-2">
        <ChatPreview />
        
        
      </div>
    </div>
  );
}

export default Chats;
