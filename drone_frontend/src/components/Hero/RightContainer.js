import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function RightContainer({ hoveredSide, setHoveredSide, scrollToSection }) {
  const videoRef = useRef(null);
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const secondVideo = videoData[1];

  return (
    <div
      className={`relative h-full transition-all duration-500 overflow-hidden ${
        hoveredSide === "right" ? "w-[80%]" : "w-1/2"
      } bg-gray-800`}
      onMouseEnter={() => setHoveredSide("right")}
      onMouseLeave={() => setHoveredSide(null)}
    >
      <video
        ref={videoRef}
        src={secondVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-white ${
          hoveredSide === "right" ? "opacity-100" : "opacity-0"
        }`}
        onClick={scrollToSection}
      >
        <h1 className="text-5xl font-bold">Stabilized Drone</h1>
        <p className={`${descFullyRevealed ? "opacity-100" : "opacity-0"}`}>
          Discover stunning stabilized drone visuals!
        </p>
      </div>
    </div>
  );
}

export default RightContainer;
