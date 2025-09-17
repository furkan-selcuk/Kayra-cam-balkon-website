import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FotoArchieved from './components/FotoArchived'


function App() {
  return (
    <div class=" w-full h-screen">
      <Header />
      <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        <FotoArchieved id="foto" />
        <Contact id="contact" />
      <Footer />
    </div>
  );
}


export default App;
