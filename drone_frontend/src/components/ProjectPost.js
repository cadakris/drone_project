import React, { useEffect, useState } from 'react';

const ProjectPosts = ({post}) => {
    console.log(post)
   
    return (
        <div>
            <p>{post.project_title}</p>
        </div>
  
    )

};


export default ProjectPosts;