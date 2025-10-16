import React from 'react';

const services = [
  {
    title: 'Product Strategy',
    description:
      'We translate business objectives into actionable design roadmaps with measurable success metrics.',
    icon: '🎯',
  },
  {
    title: 'UX Research',
    description:
      'Deep user interviews, journey mapping, and usability testing to ensure every decision is data-backed.',
    icon: '🔍',
  },
  {
    title: 'Interface Design',
    description:
      'Crafting pixel-perfect, accessible UI systems that scale across web and mobile platforms.',
    icon: '🎨',
  },
];

const Services = () => (
  <section id="services" className="py-5 bg-light">
    <div className="container">
      <div className="row align-items-center mb-5">
        <div className="col-lg-7">
          <span className="badge-soft mb-3">What we do</span>
          <h2 className="display-6 fw-bold section-title mb-3">End-to-end product design expertise</h2>
          <p className="lead text-secondary mb-0">
            Our multi-disciplinary team partners with founders and product leaders to validate ideas, design
            intuitive experiences, and ship interfaces that convert.
          </p>
        </div>
        <div className="col-lg-5 d-flex justify-content-lg-end mt-4 mt-lg-0">
          <a href="#process" className="btn btn-outline-accent">
            Explore our process
          </a>
        </div>
      </div>
      <div className="row g-4">
        {services.map((service) => (
          <div className="col-md-4" key={service.title}>
            <div className="card h-100 shadow-sm border-0 rounded-4 p-4">
              <div className="icon-circle mb-3" style={{ fontSize: '1.25rem' }}>
                {service.icon}
              </div>
              <h5 className="fw-semibold mb-3">{service.title}</h5>
              <p className="text-secondary mb-0">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
