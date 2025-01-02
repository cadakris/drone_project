import React, { useRef } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero/Hero";
import AboutBlurb from './components/AboutBlurb';
import Portfolio from './components/Portfolio';

function App() {
  const fpvRef = useRef(null); // Reference for FPV section
  const droneRef = useRef(null); // Reference for Drone section

  // Functions to scroll to the respective sections
  const scrollToFPV = () => {
    if (fpvRef.current) {
      fpvRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDrone = () => {
    if (droneRef.current) {
      droneRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Hero scrollToFPV={scrollToFPV} scrollToDrone={scrollToDrone} />
      <AboutBlurb />
      <div ref={fpvRef}>
        <Portfolio title="FPV Projects" filter="FPV" />
      </div>
      <div ref={droneRef}>
        <Portfolio title="Drone Projects" filter="Drone" />
      </div>
    </div>
  );
}

export default App;
