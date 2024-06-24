import React from 'react'
import logoImage from '../assets/POETHERAPY_4[1].png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
        <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" />
        </Link>
        <div className="navigation">
          <Link to="#">BookStore</Link>
          <Link to="/login">Login</Link>
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
