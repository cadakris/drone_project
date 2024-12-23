// /src/components/Hero/LeftContainer.js
import React, { useRef } from "react";
import { videoData } from "./MediaData";

function LeftContainer({ hoveredSide, setHoveredSide }) {
  const videoRef = useRef(null);
  const firstVideo = videoData[0]; // For the left side, pick the first video

  // Determine the width class dynamically
  let widthClass = "w-1/2"; // default 50% if nothing hovered
  if (hoveredSide === "left") {
    widthClass = "w-[80%]"; // expand left side to 80%
  } else if (hoveredSide === "right") {
    widthClass = "w-[20%]"; // shrink left side to 20% if right is hovered
  }

  // Hover events
  const handleMouseEnter = () => {
    setHoveredSide("left");
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative h-full transition-all duration-500 overflow-hidden ${widthClass} bg-black`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={firstVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Centered Label "FPV" with difference blend */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white transition-opacity duration-500 cursor-pointer ${
          hoveredSide === "left" ? "opacity-100" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }} // For inverted text effect
      >
        FPV
      </div>
    </div>
  );
}

export default LeftContainer;
