import { useState } from 'react'
import './Navbar.css'; // Note the capitalization

function navbar() {

  return (
    <>
     <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="brand-title">SmartERP</h1>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default navbar
