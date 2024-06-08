import React from 'react'
import './navbar.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../routes';

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <footer className=''>
        <Link to={`/${PrivateRoutes.CHAT}`}>
            <CiSquarePlus size={'3em'} />
        </Link>
        <Link to={`/${PrivateRoutes.NEWCHAT}`}>
        <CiSquarePlus size={'3em'} />

        </Link>
        <Link to={`/${PrivateRoutes.CONVERSATION}`}>
        <CiSquarePlus size={'3em'} />

        </Link>
    </footer>
  )
}

export default NavBar