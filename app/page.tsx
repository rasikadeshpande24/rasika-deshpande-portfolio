'use client';

import React from 'react';
import { Header, Hero, About, Experience, Skills, Contact, Footer } from './components';

const HomePage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="relative z-20 bg-white/95">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;