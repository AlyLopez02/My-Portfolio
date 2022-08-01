import React from 'react';
import './styles.css'

export default function Footer() {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center p-1 background-footer'>
        <h6>Thank you for visiting! Have a great day!</h6>
        <div className='fs-3'>
            <a href="https://github.com/AlyLopez02" className='p-2'><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/alyssa-lopez-844bb3238/" className='p-2'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://stackoverflow.com/users/18968929/alyssa" className='p-2'><i class="fa-brands fa-stack-overflow"></i></a>
        </div>
    </footer>
  );
}

//GitHub, LinkedIn, and Stack Overflow (links (maybe icons if I can figure those out))