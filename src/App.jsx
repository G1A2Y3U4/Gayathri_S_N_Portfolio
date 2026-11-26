
import React from 'react';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';


import './styles/global.css';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {

  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>

    </div>
  );
}

export default App;
