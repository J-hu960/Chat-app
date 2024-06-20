import  React, { useEffect, useState } from 'react'
import './convsersation.css'
import { Chat, Message } from '../../types';
import { io } from "socket.io-client";
import { useLocation, useParams } from 'react-router-dom';

const Conversation = () => {
  const {chatId} = useParams()
  const location = useLocation()
  const chat:Chat = location.state.chat  || {}
  console.log(chat)
  const [userInput,setUserInput] = useState<string>()
  const token =  localStorage.getItem('token');
  console.log(token)
  const socket = io('http://localhost:5100/messageEvents',{
    extraHeaders:{
      Authorization:`Bearer ${token}`
    }
  })  //namespace:messageEvents
  socket.on('message-created',(data)=>
    setMessages(messages=>[...messages,data])
)
  
  const [messages,setMessages] = useState<Message[]>([])

  const getConversationMessages =async() =>{
    
    try {
        socket.emit('findAllMessages',{roomId:chatId},(response)=>{
          setMessages(response)
        })
    } catch (error) {
      console.log(error)
    }
  };

  const handleNewMessage=(e:React.FormEvent)=>{
    e.preventDefault()
    socket.emit('newMessage',{
      data:{
        content:`${userInput}`,
        roomId:chat.id,
        userId:1
    }

    })
    setUserInput('')
  }

  const joinRoom=()=>{
    socket.emit('join-room',chat.id)
  }
  

  useEffect(()=>{
    getConversationMessages()
    // joinRoom()
    
 },[])


    return (
        <div className="conversations">
          <header className='w-full text-white p-5 flex items-center justify-around'>
            <h1 className='text-2xl'>{chat.title}</h1>
             <h3>created by: <strong>{chat.members[0].Email}</strong></h3>
          </header>
          <main className='chat-wrapper overflow-y-scroll p-10 w-full h-3/4 bg-white'>
                 {messages && messages.length >0 ?(
                  <>
                     {messages.map(message=>(
                      <p key={message.id} className='user2-message'>{message.content}</p>

                     ))}
                      
                  </>
                          
                 ):(
                  <h1>No hay mensajes</h1>
                 )}
                
          </main>
          <form onSubmit={e=>handleNewMessage(e)} action="">
            <input onChange={e=>setUserInput(e.target.value)} className='mt-6 p-5 w-72'  type='text' placeholder='escribe aquí...'></input>
            <input  className='font-bold text-indigo-600 hover:cursor-pointer ml-6' type="submit" />

          </form>
        
        </div>
      );
}

export default Conversation