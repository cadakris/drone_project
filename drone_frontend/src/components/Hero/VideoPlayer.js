import React from 'react';

function VideoPlayer({ src, videoRef }) {
  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      className="w-full h-full object-cover"
    ></video>
  );
}

export default VideoPlayer;
