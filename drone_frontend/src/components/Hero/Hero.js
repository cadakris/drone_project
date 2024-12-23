// /src/components/Hero/Hero.js
import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Hero() {
  // hoveredSide can be "left", "right", or null
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="flex w-full h-[40vh] overflow-hidden">
      <LeftContainer hoveredSide={hoveredSide} setHoveredSide={setHoveredSide} />
      <RightContainer hoveredSide={hoveredSide} setHoveredSide={setHoveredSide} />
    </div>
  );
}

export default Hero;
