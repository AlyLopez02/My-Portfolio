import React from 'react';
import './styles.css';


export default function Project({ name, image, deployedApp, repo, description, tech }) {
  return (

    <div className='container'>
      <img src={image} className='image' />

      <div className='overlay'>

        <div>

          <a href={deployedApp} className='text'>{name}</a>

          <br />

          <a href={repo} className='text'>GitHub Repository</a>

          <p>{description}</p>
          <p>Technologies: {tech}</p>
        </div>
      </div>
    </div>

  );
}
