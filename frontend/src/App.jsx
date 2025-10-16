import React from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Showcase from './components/Showcase.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div>
    <Navigation />
    <main>
      <Hero />
      <Services />
      <Showcase />
      <Process />
      <Testimonials />
      <CallToAction />
    </main>
    <Footer />
  </div>
);

export default App;
