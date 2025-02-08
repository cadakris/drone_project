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

  // Functions to scroll to the respective sections
  const scrollToFPV = () => {
    if (fpvRef.current) {
      fpvRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSD = () => {
    if (sdRef.current) {
      sdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Hero scrollToFPV={scrollToFPV} scrollToSD={scrollToSD} />
      <AboutBlurb />
      <div ref={fpvRef}>
        <Portfolio title="FPV Gallery" filter="FPV" />
      </div>
      <div ref={sdRef}>
        <Portfolio title="Stabilized Drone Gallery" filter="SD" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
