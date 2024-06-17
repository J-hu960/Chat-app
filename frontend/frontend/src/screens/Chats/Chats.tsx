import React from 'react';
import './chats.css';
import { Link } from 'react-router-dom';
import { PrivateRoutes } from '../../routes';

const Chats = () => {
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
        <div className="frame-3">
          <img className="ellipse-1" src="ellipse-10.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-4">
          <img className="ellipse-1" src="ellipse-11.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-5">
          <img className="ellipse-1" src="ellipse-12.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-6">
          <img className="ellipse-1" src="ellipse-13.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-7">
          <img className="ellipse-1" src="ellipse-14.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-8">
          <img className="ellipse-1" src="ellipse-15.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
        <div className="frame-9">
          <img className="ellipse-1" src="ellipse-16.png" alt="user" />
          <div className="username">Title</div>
          <div className="date">date</div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
