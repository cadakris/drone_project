import React, { useRef } from "react";
import { videoData } from "./utils/MediaData";

function LeftContainer({ hoveredSide, setHoveredSide }) {
  const videoRef = useRef(null);
  const firstVideo = videoData[0]; // or whichever index

  // Determine width classes based on hovered side
  let widthClass = "w-1/2"; // default 50%
  if (hoveredSide === "left") {
    widthClass = "w-[80%]"; // expand to 80% when left is hovered
  } else if (hoveredSide === "right") {
    widthClass = "w-[20%]"; // shrink to 20% if right is hovered
  }

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
      videoRef.current.currentTime = 0; // reset video
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

      {/* Centered Label: FPV */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-white text-5xl font-bold transition-opacity duration-500 cursor-pointer
          ${hoveredSide === "left" ? "opacity-100" : "opacity-0"}`}
      >
        <a href="#fpv-section">FPV</a>
      </div>
    </div>
  );
}

export default LeftContainer;
