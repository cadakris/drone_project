import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function RightContainer({ hoveredSide, setHoveredSide, scrollToSection, widthClass }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const secondVideo = videoData[1];

const handleMouseEnter = () => {
  if (window.innerWidth < 768) return;
  setHoveredSide("right");
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
  className={`relative h-1/2 md:h-full transition-all duration-500 overflow-hidden ${widthClass} bg-black`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={scrollToSection}
>
  {/* Static image on small screens */}
  <img
    src={secondVideo.imageUrl}  // replace with your static image path
    alt={secondVideo.title}
    className="w-full h-full object-cover md:hidden"
  />

  {/* Video on md+ screens */}
  <video
    ref={videoRef}
    src={secondVideo.mediaUrl}
    loop
    muted
    className="hidden md:block w-full h-full object-cover"
  />

<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center transition-opacity duration-500 cursor-pointer px-4"
     style={{ mixBlendMode: "difference" }}>
  <div className="relative max-w-[90%]">
    <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-1">
      Stabilized Drone
    </h1>
    <p
      className={`text-sm md:text-base mt-3 transition-opacity duration-200 ${
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
