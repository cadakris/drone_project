import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function LeftContainer({ hoveredSide, setHoveredSide }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // We track whether the short description has fully revealed itself
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

  const firstVideo = videoData[0];

  // Dynamically choose width (default 50%, expand to 80% if left hovered, shrink to 20% if right hovered)
  let widthClass = "w-1/2";
  if (hoveredSide === "left") {
    widthClass = "w-[80%]";
  } else if (hoveredSide === "right") {
    widthClass = "w-[20%]";
  }

  // Mouse enters: expand, play video, show text immediately but fully reveal description after 2s
  const handleMouseEnter = () => {
    setHoveredSide("left");
    if (videoRef.current) {
      videoRef.current.play();
    }
    // Immediately show FPV text (controlled by hoveredSide === "left")
    // Wait 2 seconds, then set descFullyRevealed to true
    timerRef.current = setTimeout(() => {
      setDescFullyRevealed(true);
    }, 1000);
  };

  // Mouse leaves: revert to default, pause/reset video, hide description
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
      >
        {/* FPV shows up immediately upon hover */}
        <h1 className="text-5xl font-bold text-white text-left">FPV</h1>

        {/* Description is present but only fully revealed after 2s */}
        <p
          className={`text-base text-white text-left mt-3 transition-opacity duration-300 ${
            descFullyRevealed ? "opacity-100" : "opacity-0"
          }`}
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt fames nulla ex sagittis sapien. Himenaeos vel quis euismod id auctor netus in. 
        </p>
      </div>
    </div>
  );
}

export default LeftContainer;
