import React from 'react'
import '../screens/Chats/chats.css'

const ChatPreview = () => {
  return (
    <div className="frame-3">
          <img className="ellipse-1" src="ellipse-10.png" alt="user" />
          <div className="username">Titulo</div>
          <div className="date">Fecha</div>
        </div>
  )
}

export default ChatPreview