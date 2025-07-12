import React, { useState } from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function Hero({ scrollToSection, fpvRef, sdRef }) {
const [hoveredSide, setHoveredSide] = useState(null); // "left", "right", or null


let leftWidth = "w-full md:w-1/2";
let rightWidth = "w-full md:w-1/2";

if (hoveredSide === "left") {
  leftWidth = "w-full md:w-[80%]";
  rightWidth = "w-full md:w-[20%]";
} else if (hoveredSide === "right") {
  leftWidth = "w-full md:w-[20%]";
  rightWidth = "w-full md:w-[80%]";
}

  return (
    <div className="flex flex-col md:flex-row w-full md:h-[80vh] bg-[#384454]">
      <LeftContainer
        setHoveredSide={setHoveredSide}
        scrollToFPV={() => scrollToSection(fpvRef)}
        widthClass={leftWidth}
      />
      <RightContainer
        setHoveredSide={setHoveredSide}
        scrollToStabilized={() => scrollToSection(sdRef)}
        widthClass={rightWidth}
      />
    </div>
  );
}

export default Hero;
