import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Hero() {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="flex w-full h-[40vh] overflow-hidden">
      <LeftContainer hoveredSide={hoveredSide} setHoveredSide={setHoveredSide} />
      <RightContainer hoveredSide={hoveredSide} setHoveredSide={setHoveredSide} />
    </div>
  );
}

export default Hero;
