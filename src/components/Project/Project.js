import React from 'react';



export default function Project({ name, image, deployedApp, repo }) {
  return (

    <div className='container'>
      <img src={image} />

      <div className='overlay'>

        <div className='text'>

          <a href={deployedApp}>{name}</a>

          <br />

          <a href={repo}>GitHub Repository</a>

        </div>
      </div>
    </div>

  );
}

// make overlay a flexbox and use the following -
// display: flex;
// justify-content: center;
// align-items: center;