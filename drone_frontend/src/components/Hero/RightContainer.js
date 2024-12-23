// /src/components/Hero/RightContainer.js
import React, { useRef } from "react";
import { videoData } from "../../utils/MediaData";

function RightContainer({ hoveredSide, setHoveredSide }) {
  const videoRef = useRef(null);
  const secondVideo = videoData[1]; // For the right side, pick the second video

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
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-white transition-opacity duration-500 cursor-pointer ${
          hoveredSide === "right" ? "opacity-100" : "opacity-0"
        }`}
        style={{ mixBlendMode: "difference" }} // For inverted text effect
      >
        FTP
        {/* or VPS if you'd prefer that text */}
      </div>
    </div>
  );
}

export default RightContainer;
