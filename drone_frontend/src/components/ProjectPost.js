import React, { useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const ProjectPosts = ({ post }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Close modal called")
    setIsModalOpen(false);
  };

  return (
    <div className="relative video-container p-4 bg-white overflow-hidden">
      {/* Video Thumbnail with Play Button */}
      <div
        className="video-thumbnail relative cursor-pointer group"
        onClick={openModal}
      >
        <video
          src={post.video}
          className="w-full h-48 object-cover  pointer-events-none"
          muted
        />
        {/* Hover Title and Description */}
        <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-lg font-bold">{post.project_title}</h3>
          <p className="text-sm">{post.description}</p>
          <div className="flex justify-center p-6">
            <button
                onClick={openModal}
                className="w-16 h-16 bg-neutral-300 text-black rounded-full flex items-center justify-center hover:shadow-lg hover:scale-110 transition-transform duration-200">Play</button>
          </div>

        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl z-50">
                <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-black bg-opacity-70 text-white hover:shadow-lg hover:scale-110 transition-transform duration-200 rounded-full px-4 py-2 z-50">
                ✕
                </button>
                <video
                src={post.video}
                className="w-full h-auto"
                autoPlay
                controls
                />
            </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPosts;
