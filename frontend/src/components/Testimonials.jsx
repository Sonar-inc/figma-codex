import React from 'react';

const testimonials = [
  {
    quote:
      'NovaStudio has been instrumental in shaping our product vision. Their UX research surfaced crucial insights that transformed our roadmap.',
    name: 'Lena Ortiz',
    role: 'VP Product, Haven Health',
    avatar: 'https://i.pravatar.cc/120?img=32',
  },
  {
    quote:
      'From the first workshop, the team felt like an extension of ours. The design system they delivered accelerated our development by months.',
    name: 'Noah Fraser',
    role: 'Co-founder, AtlasOS',
    avatar: 'https://i.pravatar.cc/120?img=15',
  },
  {
    quote:
      'Their attention to detail and focus on accessibility set a new standard for our internal teams. Launch week was our smoothest yet.',
    name: 'Priya Narayanan',
    role: 'Director of Product, Lumina',
    avatar: 'https://i.pravatar.cc/120?img=47',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-5">
    <div className="container">
      <div className="row justify-content-between align-items-center mb-5">
        <div className="col-lg-6">
          <span className="badge-soft mb-3">Client stories</span>
          <h2 className="display-6 fw-bold section-title mb-3">Partnering with teams that build the future</h2>
        </div>
        <div className="col-lg-4 text-lg-end">
          <p className="text-secondary mb-0">
            We work with leaders across fintech, healthcare, climate tech, and AI. Here’s what they say about the
            impact of our collaboration.
          </p>
        </div>
      </div>
      <div className="row g-4">
        {testimonials.map((item) => (
          <div className="col-lg-4" key={item.name}>
            <div className="testimonial-card h-100">
              <p className="fs-5 mb-4">“{item.quote}”</p>
              <div className="d-flex align-items-center gap-3">
                <img src={item.avatar} alt={item.name} className="rounded-circle" width="56" height="56" />
                <div>
                  <div className="fw-semibold">{item.name}</div>
                  <div className="text-secondary small">{item.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
