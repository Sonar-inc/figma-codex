import React from 'react';

const steps = [
  {
    title: 'Discover',
    description: 'Stakeholder workshops, audits, and user interviews reveal opportunities and alignment.',
  },
  {
    title: 'Design',
    description: 'We co-create wireframes, prototypes, and scalable design systems with rapid feedback loops.',
  },
  {
    title: 'Deliver',
    description: 'Detailed handoff, design QA, and product analytics ensure a confident launch.',
  },
];

const Process = () => (
  <section id="process" className="py-5 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <span className="badge-soft mb-3">Our process</span>
          <h2 className="display-6 fw-bold section-title mb-3">Collaboration designed around momentum</h2>
          <p className="lead text-secondary">
            We integrate with your team as thought partners, providing clarity and velocity at every stage of the
            product journey.
          </p>
        </div>
      </div>
      <div className="row g-4">
        {steps.map((step, index) => (
          <div className="col-md-4" key={step.title}>
            <div className="h-100 p-4 rounded-4 bg-white border position-relative">
              <span className="icon-circle position-absolute top-0 start-0 translate-middle">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="pt-4 mt-2">
                <h5 className="fw-semibold mb-3">{step.title}</h5>
                <p className="text-secondary mb-0">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
