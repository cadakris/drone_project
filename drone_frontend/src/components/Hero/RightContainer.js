import React, { useRef, useState } from "react";
import { videoData } from "./MediaData";

function RightContainer({ hoveredSide, setHoveredSide }) {
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  const secondVideo = videoData[1]; 
  const [descFullyRevealed, setDescFullyRevealed] = useState(false);

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
    }, 1000)

  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setDescFullyRevealed(false);
    if(timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

  };
  return (
    <div
      className={`relative h-full transition-all duration-500 overflow-hidden ${widthClass} bg-gray-800`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={secondVideo.mediaUrl}
        loop
        muted
        className="w-full h-full object-cover"
      />

      {/* Centered Label "FTP" or "VPS" with difference blend */}
      <div
        className={`absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white transition-opacity duration-500 cursor-pointer ${
          hoveredSide === "right" ? "opacity-100" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }} 
      >
        <h1 className="text-5xl font-bold text-white text-left">DRONE</h1>
        <p
          className={`text-base text-white text-left mt-3 transition-opacity duration-300 
            ${descFullyRevealed ? "opacity-100" : "opacity-0"}`}
        >
          Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt fames nulla ex sagittis sapien. Himenaeos vel quis euismod id auctor netus in. 
        </p>
      </div>
    </div>
  );
}

export default RightContainer;
