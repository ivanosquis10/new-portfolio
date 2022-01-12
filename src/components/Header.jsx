import React, { useState } from 'react';
import heart from '../assets/Heart.svg';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header id="home" className="Header">
      <div className="logo">
        <img src={heart} alt="heart" />
        <a href="#">Ivanos!</a>
      </div>

      <nav className={`nav ${menu ? 'active' : ''}`}>
        <a href="#" className="active-link">
          Home
        </a>
        <a href="#projects">Projects</a>
        <a href="#about-me">About me!</a>
        <a href="#contact">Contact me!</a>
      </nav>
      <div onClick={handleClick} className="icon">
        <box-icon
          color="#ffffff"
          // animation="tada-hover"
          name="menu"
          size="lg"
        ></box-icon>
      </div>
    </header>
  );
};

export { Header };
