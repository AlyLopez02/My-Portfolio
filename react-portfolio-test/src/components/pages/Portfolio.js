import React from 'react';
import Project from '../Project/Project'

// images
import adventure from '../../images/adventure-adviser.png';
import cloud from '../../images/cloud-control.png';
import quiz from '../../images/code-quiz.png'
import planner from '../../images/daily-planner.png'
import noteTaker from '../../images/note-taker.png';
import passwordGenerator from '../../images/password-generator.png';


export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2> 

      <Project name={'Adventure Adviser'} image={adventure} deployedApp={'https://jcdoran33.github.io/Adventure-Adviser/'} repo={'https://github.com/jcdoran33/Adventure-Adviser'}/>

      <br />

      <Project name={'Cloud Control'} image={cloud} deployedApp={'https://alylopez02.github.io/Cloud-Control/'} repo={'https://github.com/AlyLopez02/Cloud-Control'}/>

      <br />

      <Project name={'Code Quiz'} image={quiz} deployedApp={'https://alylopez02.github.io/Code-Quiz/'} repo={'https://github.com/AlyLopez02/Code-Quiz'}/>

      <br />

      <Project name={'Daily Planner'} image={planner} deployedApp={'https://alylopez02.github.io/Daily-Planner/'} repo={'https://github.com/AlyLopez02/Daily-Planner'}/>

      <br />

      <Project name={'Note Taker'} image={noteTaker} deployedApp={'https://note-taker-app-22.herokuapp.com/'} repo={'https://github.com/AlyLopez02/Note-Taker'}/>

      <br />

      <Project name={'Password Generator'} image={passwordGenerator} deployedApp={'https://alylopez02.github.io/Password-Generator-HW/'} repo={'https://github.com/AlyLopez02/Password-Generator-HW'}/> 

      <br />

    </div>
  );
}

// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
