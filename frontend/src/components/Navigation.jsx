import React from 'react';

const Navigation = () => (
  <header className="py-4">
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          NovaStudio
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
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#showcase">
                Showcase
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#process">
                Process
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-accent ms-lg-3 mt-3 mt-lg-0" href="#contact">
                Book a Call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navigation;
