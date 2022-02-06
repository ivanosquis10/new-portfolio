import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
