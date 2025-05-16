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
    }, 700);
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
      onClick={scrollToSection}
    >
      <video
        ref={videoRef}
        src={firstVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />
<div
  className={`absolute  left-[35%] -translate-x-1/2 top-[36%] text-white transition-opacity duration-500 cursor-pointer`}
  style={{ mixBlendMode: "difference" }}
>
  <div className="relative">
  <h1 className="text-5xl font-bold leading-none mt-[2px]">FPV</h1>
    <p
      className={`text-base mt-3 transition-opacity duration-200 ${
        descFullyRevealed ? "opacity-100" : "opacity-0"
      }`}
    >
      Experience the thrill of immersive FPV drone flights, capturing the world from dynamic angles.
    </p>
  </div>
</div>
    </div>
  );
}

export default LeftContainer;
