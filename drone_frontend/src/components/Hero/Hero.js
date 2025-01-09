import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Hero({ scrollToFPV, scrollToSD }) {
  const [hoveredSide, setHoveredSide] = useState(null); // "left", "right", or null

  return (
    <div className="flex w-full h-[40vh] overflow-hidden">
      <LeftContainer
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        scrollToSection={scrollToFPV}
      />
      <RightContainer
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        scrollToSection={scrollToSD}
      />
    </div>
  );
}

export default Hero;
