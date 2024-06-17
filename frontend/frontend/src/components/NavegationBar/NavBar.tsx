import React from 'react'
import './navbar.css'
import { CiSquarePlus } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../routes';
import { TbLogin2 } from "react-icons/tb";
import { FaRegRectangleList } from "react-icons/fa6";


const NavBar = () => {
    const navigate = useNavigate()
  return (
    <footer className=''>
        <Link to={`/${PublicRoutes.LOGIN}`}>
            <TbLogin2 size={'3em'} />
        </Link>
        <Link to={`/${PrivateRoutes.CHAT}`}>
        <FaRegRectangleList size={'3em'} />

        </Link>
        <Link to={`/${PrivateRoutes.NEWCHAT}`}>
        <CiSquarePlus size={'3em'} />

        </Link>
    </footer>
  )
}

export default NavBar