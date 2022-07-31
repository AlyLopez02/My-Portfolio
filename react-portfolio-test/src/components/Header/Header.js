import React from 'react';
import NavBar from '../Navigation';
import './styles.css';

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className='d-flex justify-content-around align-items-center p-5 fs-5 background-img'>
        <h1>Alyssa Lopez</h1>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
}
