import React from 'react';
import './styles.css';


export default function Project({ name, image, deployedApp, repo, description, tech }) {
  return (

    <div className='card card-size text-center m-md-4 m-1 px-md-0 px-3 pt-md-0 pt-3 pb-md-0 pb-sm-3 pb-5'>
      <img src={image} className='image' alt={name} />

      <div className='overlay'>

        <div >
          <div>

            <a href={deployedApp} className='name-logo p-sm-2 p-1'>{name}</a>

            <a href={repo} className='name-logo'><i class="fa-brands fa-github"></i></a>

          </div>

          <div className='container'>
            <p>{description}</p>
            <p className='fw-bold fst-italic mb-0'>Technologies: </p>
            <p className='mb-0'>{tech}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
