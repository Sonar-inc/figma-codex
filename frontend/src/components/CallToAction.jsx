import React from 'react';

const CallToAction = () => (
  <section id="contact" className="py-5">
    <div className="container">
      <div className="card shadow-card overflow-hidden">
        <div className="row g-0 align-items-center">
          <div className="col-lg-7 p-5">
            <span className="badge-soft mb-3">Let’s talk</span>
            <h2 className="display-6 fw-bold section-title mb-3">Ready to move from idea to product launch?</h2>
            <p className="text-secondary mb-4">
              Tell us about your goals and we’ll put together a tailored engagement model to meet your timeline and
              budget.
            </p>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control form-control-lg" id="name" placeholder="Jane Doe" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Work email
                </label>
                <input type="email" className="form-control form-control-lg" id="email" placeholder="you@company.com" />
              </div>
              <div className="col-12">
                <label htmlFor="project" className="form-label">
                  Project details
                </label>
                <textarea className="form-control form-control-lg" id="project" rows="3" placeholder="Share a quick overview of your idea"></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-accent btn-lg px-4">
                  Book a discovery call
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 d-none d-lg-block position-relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Team collaboration"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
