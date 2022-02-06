import React from 'react';
import html from '../assets/Html5.svg';
import css3 from '../assets/CSS3.svg';
import JS from '../assets/JS.svg';
import GIT from '../assets/GIT.svg';

const Skills = () => {
  // <div className='Skills_item'>
  //         <box-icon name='html5' type='logo' color='#ffffff'></box-icon>
  //         <p>HTML</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='css3' type='logo' color='#ffffff'></box-icon>
  //         <p>CSS3</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='javascript' type='logo' color='#ffffff'></box-icon>
  //         <p>JavaScript</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='nodejs' type='logo' color='#ffffff'></box-icon>
  //         <p>NodeJS</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='git' type='logo' color='#ffffff'></box-icon>
  //         <p>GIT</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='sass' type='logo' color='#ffffff'></box-icon>
  //         <p>SASS</p>
  //       </div>
  //       <div className='Skills_item'>
  //         <box-icon name='react' type='logo' color='#ffffff'></box-icon>
  //         <p>React</p>
  //       </div>

  return (
    <section className='Skills'>
      <h3 className='Skills_title'>
        <box-icon
          name='heart'
          type='solid'
          color='#07e179'
          size='lg'
        ></box-icon>
        Skills
      </h3>
      <div className='Skills_container'>
        <div className='Skills_item'>
          <svg
            className='html svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>HTML5</title>
            <path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' />
          </svg>
          <p>HTML5</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='css svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>CSS3</title>
            <path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z' />
          </svg>
          <p>CSS3</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='JS svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>JSS</title>
            <path d='M0 2.5v19h19.2v-1.95c.506.263 1.124.42 1.857.42 1.687 0 2.943-.877 2.943-2.475 0-1.483-.852-2.143-2.36-2.79l-.444-.19c-.762-.33-1.092-.546-1.092-1.078 0-.431.33-.761.85-.761.51 0 .838.215 1.142.76l1.383-.887c-.585-1.029-1.396-1.422-2.525-1.422-.715 0-1.312.207-1.754.555V2.5zm.36.359h18.48v9.182a2.266 2.266 0 00-.487 1.432c0 .654.176 1.152.486 1.552v2.537l-1.018.592c.232.456.57.864 1.018 1.177v1.81H.361zm14.188 8.268c-1.586 0-2.6 1.014-2.6 2.346 0 1.445.85 2.13 2.132 2.675l.443.19c.81.355 1.293.57 1.293 1.18 0 .508-.47.875-1.205.875-.876 0-1.371-.457-1.752-1.078l-1.443.839c.521 1.03 1.587 1.816 3.236 1.816 1.687 0 2.943-.876 2.943-2.475 0-1.483-.852-2.143-2.361-2.79l-.444-.19c-.762-.33-1.092-.546-1.092-1.078 0-.431.33-.761.85-.761.51 0 .838.215 1.143.76l1.382-.887c-.584-1.029-1.396-1.422-2.525-1.422zm-5.868.101v6.038c0 .888-.368 1.116-.951 1.116-.61 0-.864-.418-1.143-.913l-1.446.875c.419.886 1.242 1.622 2.664 1.622 1.574 0 2.652-.837 2.652-2.676v-6.062zm10.52 4.173c.345.295.781.532 1.286.747l.443.19c.81.355 1.293.57 1.293 1.18 0 .508-.47.875-1.206.875-.876 0-1.37-.457-1.752-1.078l-.064.037z' />
          </svg>
          <p>JavaScript</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='node svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Node.js</title>
            <path d='M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z' />
          </svg>
          <p>NodeJS</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='git svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Git</title>
            <path d='M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187' />
          </svg>
          <p>GIT</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='sass svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Sass</title>
            <path d='M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z' />
          </svg>
          <p>Sass</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='terminal svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Windows Terminal</title>
            <path d='M8.165 6V3h7.665v3H8.165zm-.5-3H1c-.55 0-1 .45-1 1v2h7.665V3zM23 3h-6.67v3H24V4c0-.55-.45-1-1-1zM0 6.5h24V20c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V6.5zM11.5 18c0 .3.2.5.5.5h8c.3 0 .5-.2.5-.5v-1.5c0-.3-.2-.5-.5-.5h-8c-.3 0-.5.2-.5.5V18zm-5.2-4.55l-3.1 3.1c-.25.25-.25.6 0 .8l.9.9c.25.25.6.25.8 0l4.4-4.4a.52.52 0 0 0 0-.8l-4.4-4.4c-.2-.2-.6-.2-.8 0l-.9.9c-.25.2-.25.55 0 .8l3.1 3.1z' />
          </svg>
          <p>Terminal</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='vite svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Vite</title>
            <path d='m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z' />
          </svg>
          <p>Vite</p>
        </div>
        <div className='Skills_item'>
          <svg
            className='react svg'
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>React</title>
            <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
          </svg>
          <p>React</p>
        </div>
      </div>
    </section>
  );
};

export { Skills };
