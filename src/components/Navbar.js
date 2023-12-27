// Navbar.js
import React from 'react';
import LogoImage from '../assets/KD.png';
import '../App.css';

const Navbar = () => {
  return (
    <section id="nav" className="nav-section" >
    <nav className="navbar navbar-expand-lg navbar-light bg-gray-400 ">
      <div className="container">
        <a className="navbar-brand text-secondary" href="/">
          <img src={LogoImage} alt="KD Real Estate" className="logo-img" />
          Real Estate Agents
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <p class="text-end">
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonies">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        </p>

      </div>
    </nav>
    </section>
  );
};

export default Navbar;
