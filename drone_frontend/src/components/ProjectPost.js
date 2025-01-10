import React from "react";

const ProjectPosts = ({ post }) => {
  return (
    <div className="video p-4 bg-white rounded-lg flex flex-col items-center">
      <h3 className="text-lg font-bold mb-3">{post.project_title}</h3>
      <video
        src={post.video}
        controls
        className="mb-3"
      />
      <p className="text-sm text-gray-600">{post.description}</p>
    </div>
  );
};

export default ProjectPosts;