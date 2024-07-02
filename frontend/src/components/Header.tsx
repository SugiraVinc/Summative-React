import React from 'react'
import logoImage from '../assets/POETHERAPY_4[1].png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const { userInfo } = useSelector((state: any) => state.auth)

  return (
    <header>
        <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" />
        </Link>
        <div className="navigation">
          <Link to="/book">BookStore</Link>
          {userInfo ? <Link to="#">{userInfo.name}</Link> : <Link to="/login">Login</Link> }
          
          <Link to="#">Contacts</Link>
        </div>
        <label htmlFor="check">
          <FaBars className="menu-btn" />
          <FaTimes className="close-btn" />
        </label>
      </header>
  )
}

export default Header
