import React from 'react';

const caseStudies = [
  {
    title: 'FinEdge Mobile Banking',
    description: 'Redesigned the onboarding and dashboard for a challenger bank, increasing activation by 38%.',
    badge: 'Fintech',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Flux Automation Suite',
    description: 'Modular design system for a B2B automation platform serving 120k monthly active users.',
    badge: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
];

const Showcase = () => (
  <section id="showcase" className="py-5">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-lg-8">
          <span className="badge-soft mb-3">Recent work</span>
          <h2 className="display-6 fw-bold section-title mb-3">Designing products that deliver real outcomes</h2>
          <p className="lead text-secondary mb-0">
            From Series A startups to Fortune 500 teams, we bring clarity to complex challenges and translate
            insight into intuitive interfaces.
          </p>
        </div>
        <div className="col-lg-4 d-flex justify-content-lg-end mt-4 mt-lg-0">
          <a href="#contact" className="btn btn-outline-accent">
            Request full portfolio
          </a>
        </div>
      </div>
      <div className="row g-4">
        {caseStudies.map((item) => (
          <div className="col-lg-6" key={item.title}>
            <div className="card shadow-card h-100 overflow-hidden position-relative">
              <div className="ratio ratio-4x3">
                <img src={item.image} alt={item.title} className="w-100 h-100 object-fit-cover" />
              </div>
              <div className="card-body p-4">
                <span className="badge rounded-pill text-bg-light text-uppercase fw-semibold mb-3">
                  {item.badge}
                </span>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-secondary mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Showcase;
