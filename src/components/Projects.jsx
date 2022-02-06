import React from 'react';

const Projects = () => {
  return (
    <section className='Projects'>
      <div className='Projects_title'>
        <box-icon
          name='heart'
          type='solid'
          color='#07e179'
          size='lg'
        ></box-icon>
        <h3>Projects</h3>
      </div>
      <div className='Projects_container'>
        <div className='Projects_item'>
          <h4>Todo App</h4>
          <p>Esto es todoApp creado con react y vite</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vite</li>
          </ul>
          <a href='#'>
            <box-icon name='github' type='logo' animation='tada'></box-icon>
          </a>
        </div>
        <div className='Projects_item'>
          <h4>Todo App</h4>
          <p>Esto es todoApp creado con react y vite</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vite</li>
          </ul>
          <a href='#'>
            <box-icon name='github' type='logo' animation='tada'></box-icon>
          </a>
        </div>
        <div className='Projects_item'>
          <h4>Todo App</h4>
          <p>Esto es todoApp creado con react y vite</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vite</li>
          </ul>
          <a href='#'>
            <box-icon name='github' type='logo' animation='tada'></box-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Projects };
