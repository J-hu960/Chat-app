import React from 'react'
import '../screens/Chats/chats.css'
import { Chat } from '../types'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../routes'
interface props{
  chat:Chat
}
const ChatPreview = ({chat}:props) => {
  const navigate = useNavigate()

     const handleEnterChat=():void=>{
        navigate(`/${PrivateRoutes.CONVERSATION}/${chat.id}`,{state:{chat}})

     }
  return (
    <div className="frame-3">
          <div className="username">{chat.title}</div>
          <p className="date">{`created:  ${chat.createdAt}`}</p>
          <button onClick={handleEnterChat} className='bg-white rounded-full p-2 '>Ver chat</button>
        </div>
  )
}

export default ChatPreview