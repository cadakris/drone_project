import React, { useRef } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero/Hero";
import AboutBlurb from './components/AboutBlurb';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  const fpvRef = useRef(null); // Reference for FPV section
  const sdRef = useRef(null); // Reference for Drone section
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);


const scrollToSection = (sectionRef) => {
  if(sectionRef.current && navbarRef.current) {
    const elementTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    window.scrollTo({
      top: elementTop - navbarHeight,
      behavior: 'smooth',
    })
  }
}


  return (
    <div className="App">
      <Navbar 
        // scrollToGallery={scrollToFPV}
        scrollToSection={scrollToSection}
        fpvRef={fpvRef}
        navbarRef={navbarRef}
        // scrollToAbout={scrollToAbout}
      />
      <Hero 
        scrollToSection = {scrollToSection}
        fpvRef={fpvRef}
        sdRef={sdRef}
      />
      <AboutBlurb 
        aboutRef={aboutRef}
      />
      <Services/>
      <Portfolio 
        title="FPV Gallery" 
        filter="FPV"
        fpvRef={fpvRef}
        sdRef={sdRef}
      />
      <Portfolio 
        title="Stabilized Drone Gallery" 
        filter="SD"
        fpvRef={fpvRef}
        sdRef={sdRef}
      />
      <Footer />
    </div>
  );
}

export default App;
