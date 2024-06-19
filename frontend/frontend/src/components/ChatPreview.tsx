import React from 'react'
import '../screens/Chats/chats.css'
import { Chat } from '../types'
interface props{
  chat:Chat
}
const ChatPreview = ({chat}:props) => {
  return (
    <div className="frame-3">
          <div className="username">{chat.title}</div>
          <p className="date">{`created:  ${chat.createdAt}`}</p>
        </div>
  )
}

export default ChatPreview