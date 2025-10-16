import React from 'react';

const Footer = () => (
  <footer className="pt-5 pb-4 mt-5">
    <div className="container">
      <div className="row gy-4 align-items-center">
        <div className="col-lg-4">
          <h5 className="fw-semibold text-white mb-3">NovaStudio</h5>
          <p className="text-white-50 mb-0">
            Human-centered design for teams shipping category-defining products.
          </p>
        </div>
        <div className="col-lg-5">
          <div className="row">
            <div className="col-6 col-md-4">
              <h6 className="text-uppercase text-white-50 small fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled d-grid gap-2">
                <li>
                  <a href="#services">About</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#showcase">Work</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h6 className="text-uppercase text-white-50 small fw-semibold mb-3">Services</h6>
              <ul className="list-unstyled d-grid gap-2">
                <li>
                  <a href="#services">Product strategy</a>
                </li>
                <li>
                  <a href="#services">UX research</a>
                </li>
                <li>
                  <a href="#services">UI design</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h6 className="text-uppercase text-white-50 small fw-semibold mb-3">Contact</h6>
              <ul className="list-unstyled d-grid gap-2">
                <li>
                  <a href="mailto:hello@novastudio.design">hello@novastudio.design</a>
                </li>
                <li>
                  <a href="tel:+14155550123">+1 (415) 555-0123</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-lg-end">
          <p className="text-white-50 mb-1">© {new Date().getFullYear()} NovaStudio. All rights reserved.</p>
          <a href="#home" className="btn btn-outline-light btn-sm rounded-pill px-3">
            Back to top
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
