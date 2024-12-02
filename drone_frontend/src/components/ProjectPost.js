import React from 'react';

const ProjectPosts = ({ post }) => {


    return (
        <div>
            <h2>{post?.project_title}</h2> {/* Optional chaining in case of undefined */}
            <img src={post?.image} alt={post?.project_title} />
            <p>{post?.description}</p>
            <p>Type: {post?.project_type}</p>
        </div>
    );
};

export default ProjectPosts;