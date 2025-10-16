import React from 'react';

const Hero = () => (
  <section id="home" className="py-5 py-lg-5">
    <div className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="badge-soft mb-3">
            <span className="icon-circle" style={{ width: '2rem', height: '2rem', fontSize: '0.9rem' }}>
              ✦
            </span>
            Award-winning product design studio
          </div>
          <h1 className="display-4 fw-bold section-title mb-4">
            We craft digital experiences that feel effortless
          </h1>
          <p className="lead text-secondary mb-4">
            NovaStudio combines strategic thinking, UX research, and elegant UI design to help ambitious
            brands launch products their customers love.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="#contact" className="btn btn-accent btn-lg px-4">
              Start your project
            </a>
            <a href="#showcase" className="btn btn-outline-accent btn-lg px-4">
              View portfolio
            </a>
          </div>
          <div className="d-flex flex-wrap gap-4 mt-5">
            <div>
              <h3 className="h1 fw-bold mb-0">120+</h3>
              <span className="text-secondary">Products launched</span>
            </div>
            <div>
              <h3 className="h1 fw-bold mb-0">4.9/5</h3>
              <span className="text-secondary">Client satisfaction</span>
            </div>
            <div>
              <h3 className="h1 fw-bold mb-0">10yrs</h3>
              <span className="text-secondary">Design leadership</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-illustration">
            <div className="position-absolute top-0 start-0 translate-middle-x gradient-blur" style={{ width: '28rem', height: '28rem' }}></div>
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=900&q=80"
              alt="Design dashboard preview"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
