import React from "react";

const ProjectPosts = ({ post }) => {
  return (
    <div className="video p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-bold mb-3">{post.project_title}</h3>
      <video
        src={post.video}
        controls
        className="w-full h-48 mb-3 rounded-md"
      />
      <p className="text-sm text-gray-600">{post.description}</p>
    </div>
  );
};

export default ProjectPosts;