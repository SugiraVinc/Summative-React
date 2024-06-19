import React from 'react';
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from '../assets/POETHERAPY_4[1].png';
import Image2 from '../assets/bg.png';


const Home: React.FC = () => {
  return (
    <section  style={{
        backgroundImage: `url(${Image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', 
        width: '100vw',
        overflow: 'hidden', 
      }}>
      <input type="checkbox" id="check" />
      <header>
        <h2>
          <a href="/" className="logo">
            <img src={Image} alt="Poetherapy Bookshop Logo" />
          </a>
        </h2>
        <div className="navigation">
          <a href="#">BookStore</a>
          <a href="#">Login</a>
          <a href="#">Contacts</a>
        </div>
        <label htmlFor="check">
          <FaBars className="menu-btn" />
          <FaTimes className="close-btn" />
        </label>
      </header>

      <div className="content">
        <div className="info">
          <h2>
            Brain Workout
            <br />
            <span>Be Bold</span>
          </h2>
          <p>
            Discover a wealth of knowledge and guidance on mental health with Poetherapy. Whether you're seeking insights into managing anxiety, overcoming depression, or simply looking to enhance your overall well-being, our curated collection of books is here to support you on your journey.
          </p>
          <a href="#" className="info-btn">
            Register
          </a>
        </div>
      </div>

      <div className="media-icon">
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>
    </section>
  );
};

export default Home;