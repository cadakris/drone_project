import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function RightContainer({ hoveredSide, setHoveredSide, scrollToSection }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const secondVideo = videoData[1];

  let widthClass = "w-1/2";
  if (hoveredSide === "right") {
    widthClass = "w-[80%]";
  } else if (hoveredSide === "left") {
    widthClass = "w-[20%]";
  }

  const handleMouseEnter = () => {
    setHoveredSide("right");
    if (videoRef.current) {
      videoRef.current.play();
    }
    timerRef.current = setTimeout(() => {
      setDescFullyRevealed(true);
    }, 700); // Reveal description after 1 second
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
      className={`relative h-full transition-all duration-500 overflow-hidden ${widthClass} bg-gray-800`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToSection}
    >
      <video
        ref={videoRef}
        src={secondVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />
<div
  className={`absolute top-[36%] left-[28%] -translate-x-1/2 text-white transition-opacity duration-500 cursor-pointer`}
  style={{ mixBlendMode: "difference" }}
>
  <div className="relative">
    <h1 className="text-5xl font-bold leading-none">Stabilized Drone</h1>
    <p
      className={`text-base mt-3 transition-opacity duration-200 ${
        descFullyRevealed ? "opacity-100" : "opacity-0"
      }`}
    >
      Discover stunning stabilized drone visuals!
    </p>
  </div>
</div>
    </div>
  );
}

export default RightContainer;
