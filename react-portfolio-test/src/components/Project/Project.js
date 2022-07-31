import React from 'react';
import './styles.css';


export default function Project({ name, image, deployedApp, repo, description, tech }) {
  return (

    <div className='card card-size text-center m-4'>
      <img src={image} className='image' alt={name} />

      <div className='overlay'>

        <div >
          <p>

            <a href={deployedApp} className='text p-2 fs-3 fw-bold'>{name}</a>

            <a href={repo} className='text fs-4'><i class="fa-brands fa-github"></i></a>

          </p>

          <div className='container'>
            <p className='fs-5'>{description}</p>
            <p className='fw-bold fst-italic mb-0'>Technologies: </p>
            <p>{tech}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
