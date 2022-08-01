import React from 'react';
import resume from './alyssa-lopez-resume.pdf';

export default function Resume() {
  return (
    <div className='container text-center'>
      <h2 className='m-5'><u>Resume</u></h2>
      <p className='mb-5'>
        Click <a href={resume} download>here</a> to download my resume!
      </p>

      <h4 className='fst-italic'>Proficiencies</h4>
      <ul className='list-group mb-5'>
        <li className='list-group-item'>HTML</li>
        <li className='list-group-item'>CSS</li>
        <li className='list-group-item'>Bootstrap</li>
        <li className='list-group-item'>Bulma.io</li>
        <li className='list-group-item'>JavaScript</li>
        <li className='list-group-item'>SQL</li>
        <li className='list-group-item'>React.js</li>
        <li className='list-group-item'>GitHub</li>
        <li className='list-group-item'>MongoDB</li>
      </ul>
    </div>
  );
}

// example of downloadable content link code
//<a href="/images/myw3schoolsimage.jpg" download="w3logo">
//<img src="/images/myw3schoolsimage.jpg" alt="W3Schools">
//</a>

//THEN I see a link to a downloadable resume and a list of the developer’s proficiencies