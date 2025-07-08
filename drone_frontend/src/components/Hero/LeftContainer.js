import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function LeftContainer({ hoveredSide, setHoveredSide, scrollToFPV, widthClass  }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const firstVideo = videoData[0];


const handleMouseEnter = () => {
  if (window.innerWidth < 768) return;
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
  className={`relative w-full h-1/2 md:h-full transition-all duration-500 overflow-hidden ${widthClass} bg-black`}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
  onClick={scrollToFPV}
>
  {/* Static image on small screens */}
<img
    src={firstVideo.imageUrl}
    alt={firstVideo.title}
    className="w-full h-full object-cover md:hidden"
  />

  {/* Video on md+ screens */}
  <video
    ref={videoRef}
    src={firstVideo.mediaUrl}
    loop
    muted
    className="hidden md:block w-full h-full object-cover"
  />

  {/* Small screen text */}
  <div
    className="block md:hidden absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
    style={{ mixBlendMode: "difference" }}
  >
    <h1 className="text-3xl font-bold leading-tight mt-1">
      FPV
    </h1>
    <p className="text-base mt-3">
      Experience the thrill of immersive FPV drone flights, capturing the world from dynamic angles.
    </p>
  </div>

  {/* Big screen text */}
  <div
    className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-center transition-opacity duration-500 cursor-pointer px-4"
    style={{ mixBlendMode: "difference" }}
  >
    <div className="relative max-w-[90%] scroll-mt-20">
      <h1 className="text-5xl font-bold leading-tight mt-1">
        FPV
      </h1>
      <p className={`text-base mt-3 transition-opacity duration-200 ${descFullyRevealed ? "opacity-100" : "opacity-0"}`}>
        Experience the thrill of immersive FPV drone flights, capturing the world from dynamic angles.
      </p>
    </div>
  </div>
</div>
  );
}

export default LeftContainer;
