import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo shell.png';


const Head = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="logo"
              className="rounded-circle"
              style={{ width: '40px', height: '40px' }}
            />
            <span className="ms-2 fw-bold">Espace Sessi Services Et Loisirs</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
           <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link text-dark fw-bold' to="/Acceuil">
              Acceuil</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link text-dark fw-bold' to="/offres">
              Nos Offres</Link>

            </li>
            <li className='nav-item'>
              <Link className='nav-link text-dark fw-bold' to="/Apropos">A propos</Link>
            </li>
            
            <li className='nav-item'>
              <Link className='nav-link text-dark fw-bold' to="/contact">
              Contact</Link>
            </li>
           </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Head;
