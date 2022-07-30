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

      <Project 
      name={'Adventure Adviser'} 
      image={adventure} 
      deployedApp={'https://jcdoran33.github.io/Adventure-Adviser/'} 
      repo={'https://github.com/jcdoran33/Adventure-Adviser'} 
      description={'Adventure Adviser is a website that shows the user events nearby a city they search.'}
      tech={'Font Awesome, Bluma.io, jQuery, Moment.js, Google Maps Javascript API, Google Maps Geocoding API, TicketMaster API, and OpenWeather One Call API'}/>

      <br />

      <Project 
      name={'Cloud Control'} 
      image={cloud} 
      deployedApp={'https://alylopez02.github.io/Cloud-Control/'} 
      repo={'https://github.com/AlyLopez02/Cloud-Control'} 
      description={'Cloud Control is a website that shows the user the weather of a city they search.'}
      tech={'Google Fonts, Bootstrap, jQuery, and OpenWeather One Call & Geocoding APIs'}/>
      
      <br />

      <Project 
      name={'Code Quiz'} 
      image={quiz} 
      deployedApp={'https://alylopez02.github.io/Code-Quiz/'} 
      repo={'https://github.com/AlyLopez02/Code-Quiz'} 
      description={'This project is a quiz to help test the user on some coding questions.'}
      tech={'JavaScript'}/>

      <br />

      <Project 
      name={'Daily Planner'} 
      image={planner} 
      deployedApp={'https://alylopez02.github.io/Daily-Planner/'} 
      repo={'https://github.com/AlyLopez02/Daily-Planner'} 
      description={'This enables the user to write down, edit, and save events for each hour of the day. It informs the user which hours are past, present, and future.'}
      tech={'Google Fonts, Font Awesome, and Bootstrap'}/>

      <br />

      <Project 
      name={'Note Taker'} 
      image={noteTaker} 
      deployedApp={'https://note-taker-app-22.herokuapp.com/'} 
      repo={'https://github.com/AlyLopez02/Note-Taker'} 
      description={'This project enables users to write, save, view, and delete notes.'}
      tech={'Express.js and generate-unique-id package'}/>

      <br />

      <Project 
      name={'Password Generator'} 
      image={passwordGenerator} 
      deployedApp={'https://alylopez02.github.io/Password-Generator-HW/'} 
      repo={'https://github.com/AlyLopez02/Password-Generator-HW'} 
      description={'This project generates a password based on user input regarding length and types of characters.'}
      tech={'JavaScript'}/> 

      <br />

    </div>
  );
}

// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
