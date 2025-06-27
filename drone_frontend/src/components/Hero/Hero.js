import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Hero({ scrollToFPV, scrollToSD }) {
const [hoveredSide, setHoveredSide] = useState(null); // "left", "right", or null

  // Calculate widths together
  let leftWidth = "w-1/2";
  let rightWidth = "w-1/2";

  if (hoveredSide === "left") {
    leftWidth = "w-[80%]";
    rightWidth = "w-[20%]";
  } else if (hoveredSide === "right") {
    leftWidth = "w-[20%]";
    rightWidth = "w-[80%]";
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-[80vh] bg-[#384454]">
      <LeftContainer
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        scrollToSection={scrollToFPV}
        widthClass={leftWidth}    // 🚨 pass computed width
      />
      <RightContainer
        hoveredSide={hoveredSide}
        setHoveredSide={setHoveredSide}
        scrollToSection={scrollToSD}
        widthClass={rightWidth}   // 🚨 pass computed width
      />
    </div>
  );
}

export default Hero;
