import React from 'react';
import './Header.css';
import logo from '../Images/logo.png';

function Header() {
  return (
    <div className="header-section">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
          <a className="navbar-brand" href="/">
            Hiking<span className="fw-bold">&nbsp;Life</span>
          </a>

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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Class
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Promo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Online Class
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
