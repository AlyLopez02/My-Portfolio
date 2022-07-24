import React from 'react';
import './styles.css';


export default function Project({ name, image, deployedApp, repo }) {
  return (

    <div className='container'>
      <img src={image} className='image'/>

      <div className='overlay'>

        <div>

          <a href={deployedApp} className='text'>{name}</a>

          <br />

          <a href={repo} className='text'>GitHub Repository</a>

        </div>
      </div>
    </div>

  );
}

// make overlay a flexbox and use the following -
// display: flex;
// justify-content: center;
// align-items: center;