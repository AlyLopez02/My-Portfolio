import React from 'react';
import NavBar from './Navigation';


export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className='d-flex justify-content-between'>
        <h1>Alyssa Lopez</h1>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}

//GitHub, LinkedIn, and Stack Overflow (links (maybe icons if I can figure those out))