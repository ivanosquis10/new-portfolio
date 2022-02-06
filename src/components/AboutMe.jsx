import React from 'react';
// import working from '../assets/working.svg';

const AboutMe = () => {
  /* <img src={working} alt='working image' /> */
  /* <div className='Aboutme_body'>
      </div> */
  return (
    <section className='Aboutme'>
      <h3 className='Aboutme_title'>
        <box-icon
          name='heart'
          type='solid'
          color='#07e179'
          size='lg'
        ></box-icon>
        Things <span>about me!</span>
      </h3>
      <div className='Aboutme_body'>
        <p>
          I'm a web developer in constant growth, I like to learn new
          technologies and work in a team
        </p>
        <p>
          One of my main virtues is communication and the ability to help my
          colleagues
        </p>
        <p>
          I'm a web developer in constant growth, I like to learn new
          technologies and work in a team
        </p>
        <p>
          One of my main virtues is communication and the ability to help my
          colleagues
        </p>
      </div>
    </section>
  );
};

export { AboutMe };
