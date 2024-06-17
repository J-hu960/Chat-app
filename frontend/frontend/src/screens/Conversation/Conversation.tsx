import React from 'react'
import './convsersation.css'
const Conversation = () => {
    return (
        <div className="conversations">
          <header className='w-full text-white p-5 flex items-center justify-around'>
            <h1 className='text-2xl'>Conversation title</h1>
             <h3>created by: <strong>Jordi</strong></h3>
          </header>
          <main className='chat-wrapper w-full h-3/4 bg-white'>
                  <p className='user1-message'>hola</p>
                  <p className='user2-message'>hola, que tal?</p>
                  <p className='user1-message'>hola</p>
                  <p className='user2-message'>hola, que tal?</p> <p className='user1-message'>hola</p>
                  <p className='user2-message'>hola, que tal?</p> <p className='user1-message'>hola</p>
                  <p className='user2-message'>hola, que tal?</p>
          </main>
          <form action="">
            <input className='mt-6 p-5 w-72'  type='text' placeholder='escribe aquí...'></input>
            <input className='font-bold text-indigo-600 hover:cursor-pointer ml-6' type="submit" />

          </form>
        
        </div>
      );
}

export default Conversation