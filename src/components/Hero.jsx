import React from 'react';
import logo from '../assets/hero-img.svg';

const Hero = () => {
  return (
    <section className='Hero'>
      <div className='Hero_body'>
        <h3>Hi, I'm</h3>
        <h2>Iván Rodríguez</h2>
        <p>Growing developer!</p>
      </div>
      <div className='Hero_img'>
        <img src={logo} alt='Hero image' />
      </div>
    </section>
  );
};

export { Hero };
