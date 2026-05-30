import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Speakers } from './components/sections/Speakers';
import { Schedule } from './components/sections/Schedule';
import { Sponsors } from './components/sections/Sponsors';
import { Footer } from './components/layout/Footer';
import { BackgroundTech } from './components/ui/BackgroundTech';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <BackgroundTech />
      <Header />
      <main className="main-content">
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default App;
