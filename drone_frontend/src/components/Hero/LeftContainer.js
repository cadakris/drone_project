import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function LeftContainer({ hoveredSide, setHoveredSide, scrollToSection }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const firstVideo = videoData[0];

  let widthClass = "w-1/2";
  if (hoveredSide === "left") {
    widthClass = "w-[80%]";
  } else if (hoveredSide === "right") {
    widthClass = "w-[20%]";
  }

  const handleMouseEnter = () => {
    setHoveredSide("left");
    if (videoRef.current) {
      videoRef.current.play();
    }
    timerRef.current = setTimeout(() => {
      setDescFullyRevealed(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setDescFullyRevealed(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <div
      className={`relative h-full transition-all duration-500 overflow-hidden ${widthClass} bg-black`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={firstVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white transition-opacity duration-500 cursor-pointer ${
          hoveredSide === "left" ? "opacity-100" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }}
        onClick={scrollToSection}
      >
        <h1 className="text-5xl font-bold text-white text-left">FPV</h1>
        <p
          className={`text-base text-white text-left mt-3 transition-opacity duration-300 ${
            descFullyRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          Experience the thrill of immersive FPV drone flights, capturing the world from dynamic angles.
        </p>
      </div>
    </div>
  );
}

export default LeftContainer;
