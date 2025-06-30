import React, { useRef } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero/Hero";
import AboutBlurb from './components/AboutBlurb';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const fpvRef = useRef(null); // Reference for FPV section
  const sdRef = useRef(null); // Reference for Drone section
  const navbarRef = useRef(null);

  // Functions to scroll to the respective sections
const scrollToFPV = () => {
  if (fpvRef.current && navbarRef.current) {
    const elementTop = fpvRef.current.getBoundingClientRect().top + window.scrollY;
    const navbarHeight = navbarRef.current.getBoundingClientRect().height;
    window.scrollTo({
      top: elementTop - navbarHeight,
      behavior: "smooth",
    });
  }
};

const scrollToSD = () => {
 if(sdRef.current && navbarRef.current) {
  const elementTop = sdRef.current.getBoundingClientRect().top + window.scrollY;
  const navbarHeight = navbarRef.current.getBoundingClientRect().height;
  window.scrollTo({
    top: elementTop - navbarHeight,
    behavior: "smooth",
  });
 }
};

  return (
    <div className="App">
      <Navbar 
        scrollToGallery={scrollToFPV}
        fpvRef={fpvRef}
        navbarRef={navbarRef}
      />
      <AboutBlurb />
      <Hero 
        scrollToFPV={scrollToFPV} 
        scrollToSD={scrollToSD} 
      />
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
